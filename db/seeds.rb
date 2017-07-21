# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Users (including guest)

User.destroy_all
Story.destroy_all

ActiveRecord::Base.transaction do

user1 = User.create!(username: "guest", password: "password", email: "guest@example.com")
user2 = User.create!(username: "Stephen", password: "123123", email: "stephen@small.app")

Story.create!(
  title: "Tiny horse tries his best",
  body: "If he can do it, you can too!",
  image_url: "tiny_horse1.jpg",
  author_id: user2.id
)

end
