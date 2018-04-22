class Api::CommentsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    @comments = Comment.where(story_id: params[:story_id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find_by_id(params[:id])
  end

  def update
    @comment = Comment.find_by_id(params[:id])

    if @comment.author_id == current_user.id
      if @comment.update_attributes(comment_params)
        render :show
      else
        render json: @comment.errors.full_messages, status: 422
      end
    else
      render json: ["Current user does not match comment author"], status: 422
    end
  end

  def destroy
    @comment = Comment.find_by_id(params[:id])

    if @comment.author_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ["Current user does not match comment author"], status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :story_id)
  end
end
