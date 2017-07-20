class Api::StoriesController < ApplicationController

  def create
    @story = Story.new(story_params)

    if @story.save
    else
    end
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def story_params
    params.require(:story).permit(:title, :body, :image_url)
  end
end
