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
  title: "Ecclesiastes",
  description: "There is nothing new under the sun",
  body: "9 So I reflected on all this and concluded that the righteous
    and the wise and what they do are in God’s hands, but no one knows
    whether love or hate awaits them. 2 All share a common destiny—the
    righteous and the wicked, the good and the bad,[a] the clean and
    the unclean, those who offer sacrifices and those who do not.\n
\n
As it is with the good,\n
so with the sinful;\n
as it is with those who take oaths,\n
so with those who are afraid to take them.\n
3 This is the evil in everything that happens under the sun: The same
  destiny overtakes all. The hearts of people, moreover, are full of
  evil and there is madness in their hearts while they live, and
  afterward they join the dead. 4 Anyone who is among the living
  has hope[b]—even a live dog is better off than a dead lion!\n
\n
5 For the living know that they will die,\n
but the dead know nothing;\n
they have no further reward,\n
    and even their name is forgotten.\n
6 Their love, their hate\n
    and their jealousy have long since vanished;\n
never again will they have a part\n
    in anything that happens under the sun.\n
7 Go, eat your food with gladness, and drink your wine with a
  joyful heart, for God has already approved what you do. \n
8 Always be clothed in white, and always anoint your head with oil. \n
9 Enjoy life with your wife, whom you love, all the days of this
  meaningless life that God has given you under the sun—all your
  meaningless days. For this is your lot in life and in your
  toilsome labor under the sun. \n
10 Whatever your hand finds to do, do it with all your might, for
   in the realm of the dead, where you are going, there is neither
   working nor planning nor knowledge nor wisdom.\n
\n
11 I have seen something else under the sun:\n
\n
The race is not to the swift\n
    or the battle to the strong,\n
nor does food come to the wise\n
    or wealth to the brilliant\n
    or favor to the learned;\n
but time and chance happen to them all.\n
12 Moreover, no one knows when their hour will come:\n
\n
As fish are caught in a cruel net,\n
    or birds are taken in a snare,\n
so people are trapped by evil times\n
    that fall unexpectedly upon them.\n",
  image_url: "pixel_landscape.jpg",
  author_id: user2.id
)

end
