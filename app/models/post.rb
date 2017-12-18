require 'natto'

class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  paginates_per 20

  def self.word_cloud_of(user)
    document = user.posts.pluck(:body).join(' ')
    nm = Natto::MeCab.new
    words = []
    nm.parse(document) do |n|
      words << n.surface unless n.feature =~ /助詞|\?/
    end

    word_and_count = words.each_with_object(Hash.new(0)) { |word,counts| counts[word] += 1 }
    word_and_count.map do |word, count|
      {word: word, count: count}
    end
  end
end
