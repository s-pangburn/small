json.extract! story, :id, :title, :body, :description, :created_at
json.image_url asset_path(story.image_url)

json.author story.author, :id, :username
