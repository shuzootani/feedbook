class PostsController < ApplicationController
  before_action :authenticate_user!, only: %i[create update destroy]

  def index
    @posts = Post.order(created_at: :desc)
  end

  def show
  end

  def create
    @post = current_user.posts.create!(post_params)
    render json: @post
  rescue => e
    handle_error(e)
  end

  def update
    @post = current_user.posts.find(params[:id])
    @post.update!(post_params)
    render json: @post
  rescue => e
    handle_error(e)
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    @post.destroy!
    render json: {status: :ok}
  rescue => e
    handle_error(e)
  end

  private
  def post_params
    params.require(:post).permit(:body)
  end

  def handle_error(e)
    logger.error(e.message)
    render json: {status: :error}
  end
end
