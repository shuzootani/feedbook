class CommentsController < ApplicationController
  before_action :authenticate_user!, only: %i[create update destroy]

  def index
    @comments = Comment.where(post_id: params[:id]).order(created_at: :desc).page(params[:page])
  end

  def create
    @comment = current_user.comments.create!(comment_params)
    render json: @comment
  rescue => e
    handle_error(e)
  end

  def update
    @comment = current_user.comments.find(params[:id])
    @comment.update!(comment_params)
    render json: @comment
  rescue => e
    handle_error(e)
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment.destroy!
    render json: {status: :ok}
  rescue => e
    handle_error(e)
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end

  def handle_error(e)
    logger.error(e.message)
    render json: {status: :error}
  end
end
