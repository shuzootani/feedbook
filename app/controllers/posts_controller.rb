class PostsController < ApplicationController
  before_action :authenticate_user!, only: %i[create update destroy]

  def index
  end

  def feed
    @posts = Post.includes(:user).order(created_at: :desc).page(params[:page])
    render json: @posts, each_serializer: PostSerializer
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = current_user.posts.create!(post_params)
    render json: @post, serializer: PostSerializer
  rescue => e
    handle_error(e)
  end

  def update
    @post = current_user.posts.find(params[:id])
    @post.update!(post_params)
    render json: @post, serializer: PostSerializer
  rescue => e
    handle_error(e)
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    post_id = @post.id
    @post.destroy!
    render json: post_id
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
