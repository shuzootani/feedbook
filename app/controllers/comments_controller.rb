class CommentsController < ApplicationController
  before_action :authenticate_user!, only: %i[create update destroy]

  def index
    if params[:page] == 1
      @comments = Comment.includes(:user).where(post_id: params[:post_id]).order(created_at: :desc).page(params[:page])
    else
      @comments = Comment.includes(:user).where(post_id: params[:post_id]).order(created_at: :desc).offset(11)
    end
    render json: @comments, each_serializer: CommentSerializer
  end

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.build(comment_params)
    @comment.user = current_user
    @comment.save!
    render json: @comment, serializer: CommentSerializer
  rescue => e
    handle_error(e)
  end

  def update
    @comment = current_user.comments.find(params[:id])
    @comment.update!(comment_params)
    render json: @comment, serializer: CommentSerializer
  rescue => e
    handle_error(e)
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    comment_id = @comment.id
    @comment.destroy!
    render json: comment_id
  rescue => e
    handle_error(e)
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end

  def handle_error(e)
    logger.error(e.message)
    render json: {status: :error, message: e.message}
  end
end
