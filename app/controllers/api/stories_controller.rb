class Api::StoriesController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    # if current_user
    #   # Select feed based on follows
    # end
    @stories = Story.all
  end

  def create
    @story = Story.new(story_params)
    @story.author_id = current_user.id

    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def show
    @story = Story.find_by_id(params[:id])
  end

  def update
    @story = Story.find_by_id(params[:id])

    if @story.author_id == current_user.id
      if @story.update_attributes(story_params)
        render :show
      else
        render json: @story.errors.full_messages, status: 422
      end
    else
      render json: ["Current user does not match post author"], status: 422
    end
  end

  def destroy
    @story = Story.find_by_id(params[:id])

    if @story.author_id == current_user.id
      @story.destroy
      render :show
    else
      render json: ["Current user does not match post author"], status: 422
    end
  end

  private

  def story_params
    params.require(:story).permit(:title, :body, :description, :image_url)
  end
end
