class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post

  paginates_per 10
end
