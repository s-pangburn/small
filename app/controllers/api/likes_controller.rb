class Api::LikesController < ApplicationController
  before_action :require_login, only: [:create, :destroy]

  def index
    @likes = Like.all
  end

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def show
    @like = Like.find_by_id(params[:id])
  end

  def destroy
    @like = Like.find_by_id(params[:id])

    if @like.user_id == current_user.id
      @like.destroy
      render :show
    else
      render json: ["Current user does not match for some reason"], status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:story_id)
  end
end
