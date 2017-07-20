class Api::StoriesController < ApplicationController

  def create
    @story = Story.new(story_params)

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

    if @story.update_attributes(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def destroy
    @story = Story.find_by_id(params[:id])
    @story.destroy
    render :show
  end

  private

  def story_params
    params.require(:story).permit(:title, :body, :image_url)
  end
end
