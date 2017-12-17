class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  paginates_per 20
end
