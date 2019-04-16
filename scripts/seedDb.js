const { User, Article } = require('../models')

const main = async () => {
// delete database
await User.destroy({
    where: {}
})
await Article.destroy({
    where: {}
})

// seed data -- users

const test1 = await User.create({
    name: 'Bizarro Galvao',
    email: 'bizarrogalvao@aol.com',
    username: 'galvbiz',
    bio: 'This is a bio.',
    photo: 'https://pbs.twimg.com/profile_images/1016420986755997706/YOGIGdIm_400x400.jpg'
})

// articles

const article1 = await Article.create({
    title: 'Why I love Jasmine juicebox tea',
    author: 'B. Galvao',
    content: 'This is the content of my article.'
})

const maddy = await User.create({
    name: 'Maddy Rombes',
    email: 'madelinerombes@gmail.com',
    username: 'maddyrombes',
    bio: 'Web Development Immersive student at General Assembly.',
    photo: 'https://miro.medium.com/max/2400/0*ndGW1W4oojUgz2H0.jpg'
})

const jeremy = await User.create({
    name: 'Jeremy Zimmerman',
    email: 'jtzimmerm@gmail.com',
    username: 'jzimmerm',
    bio: 'Web Development student at General Assemply & NYC based musician',
    photo: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/34441735_10100275668090830_9046594004744929280_n.jpg?_nc_cat=107&_nc_ht=scontent-lga3-1.xx&oh=9a31f70a34b171cb05764fc20c40097d&oe=5D2F0C96'
})

const codeMovies = await Article.create({
    title: 'Five Movies that Vastly Misrepresent the Life of a Coder',
    author: 'Maddy Rombes',
    content: 'Victorious revaluation good superiority horror revaluation. Zarathustra zarathustra decieve society ubermensch overcome god salvation madness gains. Convictions decieve self eternal-return selfish hope chaos christianity hope snare. Of revaluation decrepit superiority sea value. Burying self justice oneself noble will prejudice joy value snare depths society horror. Strong depths against enlightenment philosophy moral. Justice suicide justice ultimate burying. Ocean grandeur self derive intentions madness gains philosophy horror holiest sea deceptions aversion convictions. Christian faith value oneself good abstract zarathustra decrepit. Love philosophy spirit society burying faithful. Madness enlightenment self self strong. Decieve disgust snare madness of right. Enlightenment chaos prejudice will convictions salvation love philosophy. Oneself insofar depths free strong truth snare madness convictions.'
})

const cssAni = await Article.create({
    title: 'A List of My Favorite CSS animations + sources',
    author: 'Maddy Rombes',
    content: 'Faith victorious ascetic holiest horror against. Grandeur merciful war reason faith right faith passion. Truth value love of decrepit christian right disgust intentions free abstract noble fearful transvaluation. Mountains ascetic of society strong will of sexuality ocean play. Justice inexpedient inexpedient justice salvation. Ideal revaluation right faithful morality sexuality gains gains moral. Hope pinnacle hatred passion virtues morality noble law fearful ascetic. Play society eternal-return oneself disgust holiest endless dead enlightenment. Right transvaluation marvelous inexpedient dead oneself society depths morality evil. Sexuality salvation revaluation overcome battle ultimate sea god overcome. Horror madness virtues aversion disgust depths prejudice hope faith against.'
})

const dreamJob = await Article.create({
    title: 'How I Landed My Dream Job in Software Engineering',
    author: 'Maddy Rombes',
    content: 'Joy chaos hatred faith marvelous noble depths justice convictions ultimate ubermensch god philosophy battle. Evil christian sea prejudice spirit fearful spirit passion moral ubermensch value horror passion pinnacle. Good god faith intentions marvelous derive overcome holiest. Value truth fearful truth philosophy value. Derive ultimate faith war noble gains overcome. Transvaluation ultimate selfish battle god. Society mountains christianity good against ultimate pious christianity ocean.'
})

const faveBooks = await Article.create({
    title: 'Maddy\'s Favorite Nerd Books',
    author: 'Maddy Rombes',
    content: 'Chaos burying derive right superiority. Joy selfish transvaluation aversion play abstract zarathustra abstract contradict christianity decrepit decrepit war joy. Gains gains faithful gains superiority evil virtues overcome sexuality selfish. Convictions strong fearful will merciful transvaluation value right suicide battle war virtues burying. Passion good hope self disgust convictions faith insofar zarathustra. Hatred battle free ocean ascetic ubermensch ocean love endless superiority philosophy transvaluation good eternal-return. Philosophy sea law decieve derive merciful oneself reason depths. Decieve marvelous burying justice inexpedient prejudice sexuality decieve self.'
})

const etsyAPI = await Article.create({
    title: 'I Figured Out Etsy\'s API so You Don\'t Have To',
    author: 'Maddy Rombes',
    content: 'Abstract salvation ultimate ubermensch against inexpedient. Ascetic gains salvation evil hatred decrepit. Selfish sea sexuality ultimate convictions passion fearful convictions decieve strong justice madness free spirit. Mountains ultimate faithful oneself intentions. Ascetic ideal insofar morality ultimate battle christianity strong value joy ideal. Holiest derive oneself victorious eternal-return disgust hope decieve moral eternal-return faithful virtues. Holiest war god society love christian contradict revaluation dead truth. Enlightenment truth battle mountains ascetic snare madness of.'
})

const karaoke = await Article.create({
    title: 'The Key to Success at a Coding Bootcamp? Attend Karaoke',
    author: 'Maddy Rombes',
    content: 'Dead salvation reason merciful chaos oneself enlightenment horror christian grandeur inexpedient. Spirit transvaluation love ultimate endless revaluation inexpedient of will reason convictions truth play. Endless evil merciful endless evil oneself. Grandeur burying decrepit ideal disgust. Faithful abstract christian depths war. Aversion derive truth passion suicide intentions overcome philosophy against salvation intentions faithful decieve. Battle law spirit derive of merciful superiority ascetic grandeur salvation.'
})

const appsAndAudio = await Article.create({
    title: 'Coding to Increase my Digital Presence',
    author: 'Jeremy Zimmerman',
    content: 'Cosmic ocean worldlets encyclopaedia galactica rings of Uranus another world network of wormholes. As a patch of light stirred by starlight extraordinary claims require extraordinary evidence muse about astonishment something incredible is waiting to be known? Concept of the number one the carbon in our apple pies kindling the energy hidden in matter finite but unbounded dispassionate extraterrestrial observer the only home we\'ve ever known. Concept of the number one brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing citizens of distant epochs with pretty stories for which there\'s little good evidence a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.'
})

const codingSound = await Article.create({
    title: 'Digital and Analog Sound',
    author: 'Jeremy Zimmerman',
    content: 'Fo shizzle ass, sem funky fresh blandizzle posuere, nibh quam I\'m in the shizzle shit, break it down daahng dawg magna justo pellentesque . Maecenizzle crazy, cool things fizzle fermentizzle, ipsizzle mauris dizzle gizzle, izzle tellivizzle nisl boom shackalack sed gangster. Morbi yo mamma shizzlin dizzle, check out this quizzle, malesuada volutpizzle, i saw beyonces tizzles and my pizzle went crizzle et, ma nizzle. You son of a bizzle own yo\'. Curabitur pizzle, nulla mah nizzle bling bling we gonna chung, da bomb bizzle facilisizzle dui, shiznit bibendum pede things nizzle shut the shizzle up. Donec lectus. Nizzle shizzlin dizzle dui cool sem ornare nonummy. Ass cursus, turpis vel shizzlin dizzle sollicitudizzle, da bomb purizzle break it down rizzle, dang amizzle laorizzle mi felis gangsta massa. Cras we gonna chung orci. In hizzle habitasse izzle dictumst. Maecenizzle sizzle sizzle, faucibizzle ac, stuff for sure, mammasay mammasa mamma oo sa ac, quam. Aliquam brizzle sizzle, tellivizzle vizzle, ultrices quizzle, break yo neck, yall pimpin\', stuff. Dizzle own yo\' magna at quizzle pizzle vulputate. Lorem ipsum for sure sit amet, consectetuer adipiscing elizzle.'
})

const sightThruSound = await Article.create({
    title: 'Need to make an Audio Visualizer',
    author: 'Jeremy Zimmerman',
    content: 'The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start. If there\'s two big trees invariably sooner or later there\'s gonna be a little tree. All those little son of a guns. We don\'t have to be committed. We are just playing here. Get away from those little Christmas tree things we used to make in school. I\'m sort of a softy, I couldn\'t shoot Bambi except with a camera. You can create the world you want to see and be a part of. You have that power. Let\'s go up in here, and start having some fun Very easy to work these to death. You\'re the greatest thing that has ever been or ever will be. You\'re special. You\'re so very special. The little tiny Tim easels will let you down. We don\'t have anything but happy trees here.'
})

const brokeAndRecord = await Article.create({
    title: 'Recording on the Cheap',
    author: 'Jeremy Zimmerman',
    content: 'Farm-to-table post-ironic keffiyeh heirloom cold-pressed semiotics four loko freegan food truck franzen readymade shabby chic wolf. Freegan fam viral cronut seitan stumptown, lyft DIY woke 3 wolf moon typewriter cold-pressed beard taiyaki celiac. Banh mi authentic direct trade chambray kinfolk. Cliche shoreditch authentic, chicharrones PBR&B copper mug cold-pressed adaptogen activated charcoal gastropub mustache taxidermy bespoke. Single-origin coffee beard shoreditch leggings cliche post-ironic church-key jean shorts woke trust fund crucifix.'
})

const reactAudio = await Article.create({
    title: 'Make Page Sound Awesome With reactAudio!',
    author: 'Jeremy Zimmerman',
    content: 'If you\'re suggesting I play favorites, you\'re wrong. I love all of my children equally. [earlier] I don\'t care for Gob. You stay on top of her Buddy. Don\'t be afraid to ride her. Hard. If I make this comeback, I\'ll buy you a hundred George Michaels that you can teach to drive! You\'re Killing Me, Buster. Friday night. I could use a leather jacket for when I\'m on my hog and have to go into a controlled slide. Happy. That was Tom Cruise, the actor. Lucille: They said he was some kind of scientist. Michael was having brunch with Sally Sitwell at a restaurant called Skip Church\'s Bistro. In addition to brunch, the restaurant was known for an item on the menu called the "Skip\'s Scramble", an omelet that contained everything on the menu. Do not order the Skip\'s Scramble.'
})

const iLikeCats = await Article.create({
    title: 'Cats and other Fuzzy Things',
    author: 'Jeremy Zimmerman',
    content: 'Drool sleep in the bathroom sink warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats bathe private parts with tongue then lick owner\'s face. Flop over cat mojo meow and walk away and as lick i the shoes and walk on car leaving trail of paw prints on hood and windshield and purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Eats owners hair then claws head and sometimes switches in french and say "miaou" just because well why not, poop on grasses, and eat the rubberband meow to be let out. Meowing chowing and wowing. Sleep on keyboard be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day or hide when guests come over. Chew foot, yet woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now hide when guests come over, so scratch me there, elevator butt but where is my slave? I\'m getting hungry meeeeouw. Taco cat backwards spells taco cat toy mouse squeak roll over or sleep on my human\'s head scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food yet crash against wall but walk away like nothing happened purrr purr littel cat, little cat purr purr yet you are a captive audience while sitting on the toilet, pet me.'
})

// association

await article1.setUser(test1)
await codeMovies.setUser(maddy)
await cssAni.setUser(maddy)
await dreamJob.setUser(maddy)
await faveBooks.setUser(maddy)
await etsyAPI.setUser(maddy)
await karaoke.setUser(maddy)
await appsAndAudio.setUser(jeremy)
await codingSound.setUser(jeremy)
await sightThruSound.setUser(jeremy)
await brokeAndRecord.setUser(jeremy)
await reactAudio.setUser(jeremy)
await iLikeCats.setUser(jeremy)

process.exit()

}

main()