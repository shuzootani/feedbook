require 'natto'

class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  paginates_per 20

  def self.word_cloud_of(user)
    nm = Natto::MeCab.new
    document = user.posts.pluck(:body).join(' ')
    words = []

    nm.parse(document) do |n|
      words << n.surface unless n.feature =~ /助詞|\?/
    end

    words.group_by(&:itself).map do |key, value|
      {word: key, count: value.size}
    end
  end
end
