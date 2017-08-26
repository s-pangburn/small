json.extract! story, :id, :title, :body, :description, :created_at
json.image_url asset_path(story.image_url)

json.author story.author, :id, :username, :description

json.likes story.likes.each do |like|
  json.extract! like, :user_id
end
json.comments story.comments.each do |comment|
  json.partial! "api/comments/comment", comment: comment
end
