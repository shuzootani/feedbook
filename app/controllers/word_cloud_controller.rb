class WordCloudController < ApplicationController
  def index
    words = Post.word_cloud_of(User.find(params[:user_id]))
    render json: words
  end
end
