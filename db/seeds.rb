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

user1 = User.create!(
  username: "guest",
  password: "password",
  email: "guest@example.com",
  description: "Hospitality is his favorite thing."
)
user2 = User.create!(
  username: "Stephen",
  password: "123123",
  email: "stephen@small.app",
  description: "Makes small apps"
)
user3 = User.create!(
  username: "Doorman",
  password: "123123",
  email: "doorman@doors.open",
  description: "Just a man who loves doors."
)
user4 = User.create!(
  username: "Napoleon (Hill)",
  password: "123123",
  email: "napoleon@no.not.that.one",
  description: "No, not that one."
)
user5 = User.create!(
  username: "Lao Tzu",
  password: "123123",
  email: "laotzu@dao.wisdom",
  description: "李聃被尊为道教始祖、东方三大圣人之首，唐朝追认李聃为李姓始祖。"
)

ecclesiastes = Story.create!(
  title: "Ecclesiastes",
  description: "There is nothing new under the sun",
  body: "So I reflected on all this and concluded that the righteous and the wise and what they do are in God’s hands, but no one knows whether love or hate awaits them. All share a common destiny—the righteous and the wicked, the good and the bad, the clean and the unclean, those who offer sacrifices and those who do not.


As it is with the good,
        so with the sinful;

as it is with those who take oaths,
        so with those who are afraid to take them.


This is the evil in everything that happens under the sun: The same destiny overtakes all. The hearts of people, moreover, are full of evil and there is madness in their hearts while they live, and afterward they join the dead. Anyone who is among the living has hope—even a live dog is better off than a dead lion!


For the living know that they will die,
        but the dead know nothing;

they have no further reward,
        and even their name is forgotten.

Their love, their hate
        and their jealousy have long since vanished;

never again will they have a part
        in anything that happens under the sun.


Go, eat your food with gladness, and drink your wine with a joyful heart, for God has already approved what you do.

Always be clothed in white, and always anoint your head with oil.

Enjoy life with your wife, whom you love, all the days of this meaningless life that God has given you under the sun—all your meaningless days. For this is your lot in life and in your toilsome labor under the sun.

Whatever your hand finds to do, do it with all your might, for in the realm of the dead, where you are going, there is neither working nor planning nor knowledge nor wisdom.


I have seen something else under the sun:

  The race is not to the swift
          or the battle to the strong,

  nor does food come to the wise
          or wealth to the brilliant
          or favor to the learned;

but time and chance happen to them all.


Moreover, no one knows when their hour will come:

  As fish are caught in a cruel net,
        or birds are taken in a snare,

  so people are trapped by evil times
        that fall unexpectedly upon them.",
  image_url: "1041uuu_koi.gif",
  author_id: user2.id
)

doors = Story.create!(
  title: "Fifteen Doors and How to Open Them",
  description: "The Definitive Guide",
  body: "Duis vel odio leo. Donec et consequat odio. Nam blandit neque dictum velit pulvinar rutrum. Cras massa ligula, eleifend ut aliquam sed, vestibulum a sem. Sed in tortor hendrerit, sagittis diam at, pellentesque ligula. Sed efficitur dui nec nisl suscipit commodo. Etiam finibus et urna eu facilisis. Nunc condimentum laoreet ultricies. Sed eu mauris felis. Mauris urna nisl, volutpat quis porttitor sodales, auctor vel mauris. Mauris erat elit, hendrerit a aliquam non, suscipit quis ipsum. Aenean ultricies, leo eget faucibus euismod, metus mi mattis eros, sit amet pulvinar lorem erat ut metus. Fusce tincidunt, enim a ultrices facilisis, mauris lorem tincidunt diam, quis posuere metus lectus et leo. Nullam ut enim non ante suscipit convallis. Donec aliquet metus a mauris malesuada, ut sodales sem tempor. Quisque bibendum bibendum sodales.

Nulla semper pretium lacus vel varius. Cras luctus et est a elementum. Quisque erat ipsum, placerat quis consequat in, congue in neque. Mauris sagittis est nec nulla scelerisque, aliquam tempor metus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis congue justo. Pellentesque vel justo pretium, imperdiet sapien scelerisque, sodales lacus. Aenean quis libero hendrerit elit tempor aliquam imperdiet ac diam.

Maecenas sed aliquam arcu. Curabitur malesuada tincidunt maximus. Praesent iaculis turpis vitae feugiat sollicitudin. Maecenas vel dapibus odio. Integer sit amet quam eleifend arcu bibendum pretium in et libero. Fusce accumsan, libero quis interdum malesuada, dui nunc cursus nisl, et mollis sem sapien quis enim. Vivamus odio neque, ullamcorper at sodales eget, luctus ut nunc. In augue nisi, mattis sed ipsum eget, dictum porttitor quam. Nulla non est euismod, elementum augue faucibus, ornare ante. Integer non dapibus nunc.

Maecenas lobortis volutpat enim, in elementum nibh fringilla nec. Donec varius diam ac purus congue, eu vehicula lectus auctor. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam porttitor lectus a eros condimentum convallis. Duis id nisi commodo quam venenatis laoreet eu non lacus. Praesent finibus fringilla enim a mattis.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis lacus in turpis accumsan commodo. Etiam ullamcorper tortor ex, vitae tincidunt purus varius non. Integer varius leo non ullamcorper commodo. Morbi fringilla, neque eu bibendum mattis, erat ligula congue erat, eu gravida nisl neque non ante. Mauris lorem libero, ultricies ut aliquam vel, consectetur ac purus. Sed commodo nisl quis orci imperdiet, eu porta tellus blandit. Phasellus mauris erat, scelerisque ut tortor eu, molestie mollis nibh. Cras ac leo mi. Nam ac dictum mauris.

Etiam malesuada magna metus, eget scelerisque orci efficitur et. Nunc non mauris eu lacus posuere sollicitudin. Mauris et libero felis. Curabitur fermentum porta erat, in laoreet lacus aliquet vel. Suspendisse mi ligula, pharetra ac consequat id, porttitor nec sapien. Maecenas aliquam iaculis semper. Mauris ornare ante felis, nec iaculis neque efficitur at. Proin in eros odio. Nam urna tortor, sollicitudin nec massa sit amet, aliquam faucibus quam. Sed semper sem vitae ex porttitor, non pellentesque lorem lacinia. Fusce facilisis mi nec gravida feugiat. Nam gravida dolor quam, in eleifend dui efficitur auctor.

Maecenas id risus non tellus interdum facilisis hendrerit vel ipsum. Vivamus porta neque in urna ultrices sodales. Quisque enim nunc, sagittis a ligula vel, efficitur venenatis lacus. Sed aliquet volutpat quam, id eleifend lacus. Cras ut eros non ante condimentum volutpat. Fusce eget mollis quam, ut mattis arcu. Duis eu lorem nec turpis tristique pharetra. Praesent volutpat gravida tellus. Phasellus vitae commodo nibh. Nulla gravida, erat ut mattis bibendum, dolor est bibendum libero, sit amet sodales ante lectus nec dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam aliquet tristique neque, in rhoncus felis aliquam et. Mauris lobortis dui sit amet molestie lobortis. Cras orci dui, mollis sed mi sit amet, rhoncus semper velit.

Proin lobortis ante purus, quis auctor mi imperdiet a. Sed eu sem et nisl ultrices malesuada. Nam in nulla eu nulla bibendum volutpat. Mauris tempor venenatis risus, ut volutpat dui. Praesent mollis luctus leo et ultrices. Proin magna diam, tincidunt et enim non, dignissim pellentesque ante. Aliquam erat volutpat. Duis semper, magna at dignissim tincidunt, sem erat pretium ligula, sit amet molestie purus lorem non mi. Aliquam quis porttitor tortor. Pellentesque euismod condimentum risus, vel efficitur libero porttitor eu. Suspendisse a faucibus velit.

Sed orci velit, varius ac condimentum ac, suscipit facilisis nisi. Donec erat erat, dictum tristique gravida vel, ullamcorper sed eros. Nulla condimentum erat non gravida dapibus. Nulla eget sodales dolor. Pellentesque maximus finibus rhoncus. Praesent rutrum turpis ut enim tempor, eget varius velit bibendum. Duis feugiat iaculis arcu non laoreet. Vestibulum pharetra pulvinar nunc, at maximus quam feugiat ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in sodales sapien.

In lorem dolor, rutrum ut laoreet vel, dignissim vitae nulla. Suspendisse molestie laoreet metus a varius. Sed nec efficitur velit. Suspendisse eu venenatis nisi. Quisque vulputate iaculis pretium. Sed egestas ex et metus porttitor, id maximus est egestas. Praesent malesuada mattis turpis sit amet rhoncus. Duis ac lacus non neque tempus finibus. Sed accumsan est mollis, hendrerit lacus nec, accumsan ex. Donec euismod eros quam, sit amet vestibulum magna tempus ac.",
  image_url: "1041uuu_apartment.gif",
  author_id: user3.id
)

great_things = Story.create!(
  title: "If you cannot do great things, do small things in a great way",
  description: "Wisdom from Napoleon (Hill)",
  body: "Duis vestibulum arcu at nisl feugiat, sed elementum erat dictum. Nam sit amet varius dolor, dictum fermentum diam. Vestibulum elit orci, laoreet vitae nisl rutrum, suscipit placerat urna. Vestibulum mollis neque ac vestibulum dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi sit amet tempus neque, eu tempus dui. Aliquam pharetra ex nibh, sed dapibus magna iaculis eu. Fusce ornare turpis at pretium fermentum. Ut tempus condimentum eros, et venenatis felis facilisis quis. Curabitur semper nulla vel mi dapibus, a dapibus velit consectetur. Donec aliquet consectetur nisi eget faucibus. Donec eu mauris consectetur, ultrices sapien et, dictum justo. Vestibulum faucibus est sed ullamcorper finibus.

Mauris id turpis sed ex placerat laoreet. In hac habitasse platea dictumst. Mauris enim ipsum, venenatis eu erat sed, pulvinar laoreet magna. Sed ullamcorper, mauris in mattis fringilla, dui mauris vulputate dui, tempus tincidunt libero sem ac nibh. Fusce vestibulum tincidunt urna, vitae vulputate tortor venenatis eget. Donec egestas orci sollicitudin, porttitor sapien sed, laoreet massa. Morbi porttitor volutpat scelerisque. Ut consectetur lorem vel vestibulum euismod. Cras ac ante metus. Praesent rhoncus justo odio, quis ultrices est porttitor viverra. Sed vestibulum vestibulum malesuada. Nam porta ut augue in bibendum. Integer pharetra ante risus, et rutrum nunc dapibus vitae. Nullam vulputate tincidunt nibh, vel finibus lectus feugiat nec. Morbi enim nisi, ultrices sit amet iaculis non, semper vitae orci. Curabitur pellentesque purus eu eros elementum feugiat.

Donec venenatis augue dui, eu volutpat mi sagittis ut. Sed in elit sollicitudin, viverra lectus ut, porttitor turpis. Vestibulum ultrices consectetur urna id tempus. Nullam tempus eu justo sed tincidunt. Duis auctor elit id feugiat maximus. Fusce ullamcorper ante sit amet tincidunt sollicitudin. Praesent nec mollis massa, id porttitor arcu.",
  image_url: "merrigo_sun.gif",
  author_id: user4.id
)

smallest = Story.create!(
  title: "World's top 10 smallest apps",
  description: "The littlest of the littlest",
  body: "1. Small by Stephen Pangburn

2. Small by Stephen Pangburn

3. Small by Stephen Pangburn

4. Small by Stephen Pangburn

5. Small by Stephen Pangburn

6. Small by Stephen Pangburn

7. Small by Stephen Pangburn

8. Small by Stephen Pangburn

9. Small by Stephen Pangburn

10. iOS flashlight app",
  image_url: "merrigo_smartphone.gif",
  author_id: user2.id
)

journey = Story.create!(
  title: "A Journey of a Thousand Miles",
  description: "Do the difficult things while they are easy and do the great things while they are small.",
  body: "Integer mollis nec ante quis sagittis. Etiam vel risus vitae tortor luctus finibus vel in enim. Aenean non semper felis. Nullam a felis blandit, luctus magna quis, consectetur tortor. Cras finibus venenatis ligula, non placerat lorem consectetur in. Curabitur bibendum tellus vitae orci lacinia, ut porta neque commodo. Sed quis ex porttitor orci vulputate facilisis. Maecenas ac bibendum odio, et eleifend ligula. Praesent purus turpis, congue a ipsum in, ullamcorper condimentum dolor. Nam laoreet neque eu venenatis mollis. Phasellus quam quam, tincidunt vel ipsum id, gravida vestibulum enim. Ut at interdum justo, at finibus ex. Etiam finibus massa eget ipsum dignissim, vel tincidunt ante dictum.

Suspendisse ac ligula ut orci faucibus facilisis. Fusce maximus sed leo ut laoreet. Pellentesque ut mollis ipsum, in porttitor est. Curabitur ut lorem ac orci eleifend consequat. Aenean imperdiet, purus eu fringilla commodo, ipsum ligula blandit eros, vitae viverra ipsum nisi eget arcu. Proin molestie sem in nunc fringilla, quis sodales metus ullamcorper. Vivamus non nisi sem. Praesent commodo, libero quis dapibus condimentum, nunc purus porttitor lacus, sed porttitor leo lacus malesuada ligula. Curabitur facilisis egestas auctor. Sed mollis sem a diam dapibus ullamcorper.",
  image_url: "1041uuu_spring.gif",
  author_id: user5.id
)

zulu = Story.create!(
  title: "This is a story",
  description: "About Zulu",
  body: "Donec laoreet odio in auctor viverra. Fusce quis auctor risus. Aliquam erat volutpat. Suspendisse justo ligula, varius vitae congue et, auctor ut leo. Ut consectetur vestibulum lacinia. Nulla enim lectus, posuere condimentum tincidunt quis, mollis eu neque. Etiam tristique sagittis vehicula.

Vivamus mollis orci vitae porta scelerisque. Sed gravida auctor tortor, eu volutpat ligula viverra et. Etiam ut placerat diam. Praesent dictum augue metus, quis rutrum arcu egestas a. Donec ultrices interdum molestie. Sed a augue nisl. Suspendisse aliquet scelerisque dui, eu pharetra nisi eleifend ut. Nunc eu velit quis lacus auctor fringilla et ut lacus. Donec rhoncus, mi non auctor interdum, felis magna scelerisque lacus, non tempor neque sem in dui. Mauris et nunc ut nibh vehicula mollis.

Integer hendrerit sapien at massa imperdiet venenatis. Aenean a massa at nunc venenatis commodo. Integer pharetra eros vel nisi tempus, at maximus sapien elementum. Praesent vitae metus purus. Sed gravida urna vitae sapien varius, ut hendrerit ipsum pellentesque. In sagittis rutrum velit, malesuada eleifend nulla volutpat sed. Sed turpis nunc, pulvinar id ipsum sit amet, varius porttitor ligula. Aenean ac placerat est.

Aliquam ligula arcu, eleifend tincidunt erat eu, eleifend dignissim augue. Aliquam iaculis risus egestas rhoncus feugiat. Ut sit amet mauris velit. Vivamus purus diam, volutpat in lacus eget, faucibus volutpat elit. Etiam sit amet magna sed quam consectetur ultricies sit amet et mi. In auctor tristique risus et imperdiet. Donec arcu libero, varius at dignissim quis, faucibus ut lorem. Pellentesque id eleifend eros. Sed vehicula, arcu in mattis dapibus, urna augue varius enim, at posuere neque purus et est. Nullam at leo metus. Fusce lobortis sem nulla, bibendum consequat lacus molestie eget. Curabitur lacus nunc, sollicitudin a pulvinar nec, elementum sed turpis.

Ut lacinia commodo fermentum. Nam vulputate ipsum viverra turpis ultricies posuere. Nullam vel mauris fringilla, pharetra urna id, eleifend ante. Integer sagittis libero leo, vel pellentesque orci dignissim non. Aliquam massa ex, vehicula ac dolor eu, rhoncus molestie nulla. Pellentesque nec ipsum turpis. Nunc eu erat nec urna interdum cursus. Cras vel orci sem. Nullam dignissim nunc nec dui imperdiet mollis. In pulvinar odio ac metus ultrices, consequat facilisis justo scelerisque.",
  author_id: user1.id
)

pigeon = Story.create!(
  title: "How to Tame a Pigeon",
  description: "100% Guarantee",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, lorem nec posuere consequat, est sapien cursus ipsum, eget laoreet mauris tortor sit amet purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer hendrerit, nunc nec lacinia sagittis, nibh leo maximus ligula, eget vestibulum tortor leo quis tortor. Nullam a sapien nec nulla molestie malesuada in sit amet massa. Nullam nec diam sed tortor congue convallis. Donec vel ornare purus. Quisque pellentesque tempor enim non feugiat. Quisque pharetra quis velit sed accumsan. Curabitur euismod sed justo a dictum. Cras ut sapien egestas, dictum tortor nec, viverra sapien. Aliquam orci lorem, tristique sit amet ex at, dignissim eleifend diam. Morbi euismod maximus venenatis. Nunc dapibus neque enim, ac bibendum est efficitur a.

Proin vel orci cursus, vestibulum tellus id, dapibus tortor. Donec a sollicitudin eros. Phasellus vel facilisis mauris. Pellentesque et lacus eget velit varius egestas. Morbi sed luctus mauris, sit amet finibus metus. Aliquam vel congue lacus. Phasellus vel gravida mauris, vel sollicitudin turpis. Nullam quis ante lacus. Proin consectetur, nunc luctus aliquet accumsan, nisi urna convallis arcu, sit amet tincidunt eros risus eu odio. Donec tempus arcu quis mauris euismod, vel mollis odio convallis. Nunc eu accumsan ipsum. Aliquam bibendum non dui nec mattis. Integer imperdiet dui non justo aliquam, at dictum magna tincidunt. Etiam eu accumsan nisi, ac commodo ipsum. Curabitur id imperdiet risus. Vestibulum eleifend, sem ac mollis congue, nunc est tristique risus, sit amet tincidunt magna nulla sit amet lorem.

Aliquam erat volutpat. Morbi semper lacinia purus, eu ultricies nunc laoreet vel. Curabitur eget mattis metus. Phasellus eget ante lectus. Donec nec orci fermentum, vehicula libero fermentum, ornare tellus. Aliquam enim lorem, pellentesque et venenatis ac, eleifend at dui. Aliquam finibus leo in elit maximus, rhoncus malesuada neque lacinia. Morbi venenatis, massa eget scelerisque luctus, velit nulla luctus orci, ut faucibus libero neque in dui. Maecenas viverra odio augue. Donec tempus quis mauris sed vehicula. Donec quam eros, scelerisque vitae faucibus et, tempus in arcu. Phasellus pulvinar sapien et pulvinar condimentum. Pellentesque fringilla consequat libero, sed cursus leo tincidunt vel. Donec sagittis lectus sit amet ligula varius vehicula.

Donec tristique sed dolor non tincidunt. Ut facilisis tincidunt fermentum. Nam consectetur mattis vehicula. Mauris vulputate sed urna sit amet posuere. Cras ut orci metus. Ut dapibus diam sed elementum laoreet. Integer bibendum libero massa, quis ultrices quam ornare eu. Vestibulum aliquam ante in elit auctor venenatis. Maecenas vel tempus nibh, in congue est. Proin vel tortor vitae arcu faucibus dapibus ac id leo. Nullam bibendum tortor eget enim volutpat, commodo euismod ante faucibus.",
  image_url: "1041uuu_cherry_blossom.gif",
  author_id: user1.id
)

Comment.create!(
  body: "Interesting...",
  story_id: ecclesiastes.id,
  author_id: user5.id
)

Comment.create!(
  body: "Nulla semper pretium lacus vel varius. Cras luctus et est a elementum. Quisque erat ipsum, placerat quis consequat in, congue in neque. Mauris sagittis est nec nulla scelerisque, aliquam tempor metus dignissim. Lorem ipsum dolor sit amet, consectetur adipisci.",
  story_id: ecclesiastes.id,
  author_id: user1.id
)

Comment.create!(
  body: "Uhhhhh",
  story_id: ecclesiastes.id,
  author_id: user3.id
)

Comment.create!(
  body: "That's pretty cool.",
  story_id: ecclesiastes.id,
  author_id: user4.id
)

Comment.create!(
  body: "That's deep, bro.",
  story_id: great_things.id,
  author_id: user1.id
)

Comment.create!(
  body: "I sense some bias here...",
  story_id: smallest.id,
  author_id: user1.id
)

Comment.create!(
  body: "I don't get it.",
  story_id: zulu.id,
  author_id: user5.id
)

Comment.create!(
  body: "Clickbait",
  story_id: pigeon.id,
  author_id: user1.id
)

end
