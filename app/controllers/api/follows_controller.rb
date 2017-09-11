class Api::FollowsController < ApplicationController
  before_action :require_login, only: [:create, :destroy]

  def index
    @follows = Follow.all
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def show
    @follow = Follow.find_by_id(params[:id])
  end

  def destroy
    @follow = Follow.find_by(
      followee_id: params[:follow][:followee_id],
      follower_id: current_user.id
    )

    if @follow.follower_id == current_user.id
      @follow.destroy
      render :show
    else
      render json: ["Current user does not match for some reason"], status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end
