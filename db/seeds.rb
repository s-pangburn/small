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
  body: "So I reflected on all this and concluded that the righteous and the wise and what they do are in God’s hands, but no one knows whether love or hate awaits them. All share a common destiny—the righteous and the wicked, the good and the bad, the clean and the unclean, those who offer sacrifices and those who do not.\n
\n
As it is with the good,\n
    so with the sinful;\n
as it is with those who take oaths,\n
    so with those who are afraid to take them.\n
\n
This is the evil in everything that happens under the sun: The same destiny overtakes all. The hearts of people, moreover, are full of evil and there is madness in their hearts while they live, and afterward they join the dead. Anyone who is among the living has hope—even a live dog is better off than a dead lion!\n
\n
For the living know that they will die,\n
    but the dead know nothing;\n
they have no further reward,\n
    and even their name is forgotten.\n
Their love, their hate\n
    and their jealousy have long since vanished;\n
never again will they have a part\n
    in anything that happens under the sun.\n
\n
Go, eat your food with gladness, and drink your wine with a joyful heart, for God has already approved what you do. \n
Always be clothed in white, and always anoint your head with oil. \n
Enjoy life with your wife, whom you love, all the days of this meaningless life that God has given you under the sun—all your meaningless days. For this is your lot in life and in your toilsome labor under the sun. \n
Whatever your hand finds to do, do it with all your might, for in the realm of the dead, where you are going, there is neither working nor planning nor knowledge nor wisdom.\n
\n
I have seen something else under the sun:\n
  The race is not to the swift\n
      or the battle to the strong,\n
  nor does food come to the wise\n
      or wealth to the brilliant\n
      or favor to the learned;\n
but time and chance happen to them all.\n
\n
Moreover, no one knows when their hour will come:\n
  As fish are caught in a cruel net,\n
    or birds are taken in a snare,\n
  so people are trapped by evil times\n
    that fall unexpectedly upon them.\n",
  image_url: "pixel_landscape.jpg",
  author_id: user2.id
)

Story.create!(
  title: "This is a story",
  description: "About Zulu",
  body: "Donec laoreet odio in auctor viverra. Fusce quis auctor risus. Aliquam erat volutpat. Suspendisse justo ligula, varius vitae congue et, auctor ut leo. Ut consectetur vestibulum lacinia. Nulla enim lectus, posuere condimentum tincidunt quis, mollis eu neque. Etiam tristique sagittis vehicula.

Vivamus mollis orci vitae porta scelerisque. Sed gravida auctor tortor, eu volutpat ligula viverra et. Etiam ut placerat diam. Praesent dictum augue metus, quis rutrum arcu egestas a. Donec ultrices interdum molestie. Sed a augue nisl. Suspendisse aliquet scelerisque dui, eu pharetra nisi eleifend ut. Nunc eu velit quis lacus auctor fringilla et ut lacus. Donec rhoncus, mi non auctor interdum, felis magna scelerisque lacus, non tempor neque sem in dui. Mauris et nunc ut nibh vehicula mollis.

Integer hendrerit sapien at massa imperdiet venenatis. Aenean a massa at nunc venenatis commodo. Integer pharetra eros vel nisi tempus, at maximus sapien elementum. Praesent vitae metus purus. Sed gravida urna vitae sapien varius, ut hendrerit ipsum pellentesque. In sagittis rutrum velit, malesuada eleifend nulla volutpat sed. Sed turpis nunc, pulvinar id ipsum sit amet, varius porttitor ligula. Aenean ac placerat est.

Aliquam ligula arcu, eleifend tincidunt erat eu, eleifend dignissim augue. Aliquam iaculis risus egestas rhoncus feugiat. Ut sit amet mauris velit. Vivamus purus diam, volutpat in lacus eget, faucibus volutpat elit. Etiam sit amet magna sed quam consectetur ultricies sit amet et mi. In auctor tristique risus et imperdiet. Donec arcu libero, varius at dignissim quis, faucibus ut lorem. Pellentesque id eleifend eros. Sed vehicula, arcu in mattis dapibus, urna augue varius enim, at posuere neque purus et est. Nullam at leo metus. Fusce lobortis sem nulla, bibendum consequat lacus molestie eget. Curabitur lacus nunc, sollicitudin a pulvinar nec, elementum sed turpis.

Ut lacinia commodo fermentum. Nam vulputate ipsum viverra turpis ultricies posuere. Nullam vel mauris fringilla, pharetra urna id, eleifend ante. Integer sagittis libero leo, vel pellentesque orci dignissim non. Aliquam massa ex, vehicula ac dolor eu, rhoncus molestie nulla. Pellentesque nec ipsum turpis. Nunc eu erat nec urna interdum cursus. Cras vel orci sem. Nullam dignissim nunc nec dui imperdiet mollis. In pulvinar odio ac metus ultrices, consequat facilisis justo scelerisque.",
  image_url: "pixel_landscape.jpg",
  author_id: user1.id
)

end
