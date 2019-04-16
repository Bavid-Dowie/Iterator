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

const sean = await User.create({
    name: 'Sean Mercer',
    email: 'seansmercer@gmail.com',
    username: 'seanmercer',
    bio: `I made this for public television, but they told me it was stupid and grossly inaccurate.`,
    photo:`https://media1.tenor.com/images/4c5b19203e99df3513b2b39798f05661/tenor.gif?itemid=4572677`
})

const liz = await User.create({
    name: 'Liz Moy',
    email: 'elizabethtmoy@gmail.com',
    username: 'lizmoy',
    bio: 'Web Development Immersive student at General Assembly & Visual Designer',
    photo: 'https://i.pinimg.com/236x/0c/f4/b5/0cf4b50e48979cd2d8b2757da239e74b--shin-chan-crayon.jpg?b=t'
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

const allTheInfo = await Article.create({
    title: 'Everything You Need to Know in Life',
    author: 'Sean Mercer',
    content: `Bacon ipsum dolor amet cillum dolore strip steak tri-tip pork belly, aliqua biltong in excepteur laboris jowl frankfurter pork loin cupidatat dolor. Fatback filet mignon enim, venison pariatur incididunt pork belly tri-tip ground round. Irure anim capicola, flank meatloaf pork loin pig. Shankle pork cupidatat short loin beef ribs cillum biltong tongue drumstick incididunt sint hamburger. Officia duis jowl turkey, enim esse culpa meatloaf swine alcatra aliqua mollit ea fugiat. Meatball ea nulla aute brisket spare ribs consectetur pork chop in. Hamburger rump commodo in burgdoggen. Swine alcatra chuck eu, dolore velit prosciutto anim. Pork ullamco doner shank tongue tenderloin et est enim fugiat consectetur. Chicken ipsum nulla sausage nostrud spare ribs. Ut deserunt commodo aliqua, alcatra venison dolore biltong hamburger jowl elit ipsum pork belly. Ipsum nisi sint, reprehenderit non boudin velit t-bone magna picanha. Pariatur ham hock swine, alcatra corned beef pig andouille chicken irure cow eiusmod. Chicken jowl short loin buffalo prosciutto consectetur drumstick. Officia ball tip pariatur magna turducken beef ham, jowl irure elit. Short ribs laborum commodo nostrud. Velit proident ground round sunt. Laboris pork belly incididunt ut. Eu doner tail leberkas id, veniam aute ad incididunt nulla. Chuck id frankfurter, rump aliqua velit ad mollit shank reprehenderit ribeye veniam. Esse aute meatloaf mollit reprehenderit cow kielbasa adipisicing tenderloin in. Proident tempor culpa, magna kielbasa mollit pork in cupidatat. Bresaola corned beef meatloaf dolor short loin beef. T-bone elit duis veniam non burgdoggen shank ribeye sint est beef ribs salami. Cillum minim in, leberkas aliquip porchetta exercitation nostrud. Short loin sint ea ut nulla nostrud pig, leberkas proident. Shoulder magna tongue tempor shank ut et commodo proident bresaola t-bone. Irure boudin tempor, drumstick incididunt labore est dolore filet mignon veniam esse.`
})

const playBall = await Article.create({
    title: 'A Statistical Breakdown of Why Your Favorite Player Is Terrible',
    author: 'Sean Mercer',
    content: `Baseball ipsum dolor sit amet bunt can of corn tossed mound. Baltimore chop world series reliever pinch hitter fenway swing national pastime plunked base on balls. Tapper airmail slider blue warning track inning gold glove hey batter hot dog. Baseline slide hey batter streak interleague suicide squeeze contact bench series. Tigers slider southpaw practice dead red, triple-A pickoff. Bullpen arm cork rally relief pitcher petey walk off relay sweep. Foul pole bullpen dodgers choke up moneyball second baseman extra innings flyout. Fan away bat bat chin music line drive second base. Helmet cookie baseline perfect game shutout cup of coffee defensive indifference run batted in streak. Leather slide helmet chin music run batted in run interleague stadium rotation. Wild pitch batter's box sabremetrics tapper third base, designated hitter bullpen manager. Left fielder force cookie slugging loogy triple play line drive. Grand slam cycle leather loogy force starting pitcher rainout bat full count. Gapper red sox retire foul pole bench on-base percentage national pastime off-speed. Cy young foul line cork good eye around the horn line drive dodgers slide. Knuckle doubleheader right fielder sweep national pastime astroturf wild pitch. Streak tapper sacrifice fly lineup defensive indifference triple-A lineup stadium error. 1-2-3 glove mendoza line cycle mound, sacrifice ground ball. Tapper screwball pickoff outside cardinals, rope batter's box friendly confines robbed. Cubs range stadium outfield triple-A cookie shortstop. First baseman retire shutout helmet first base ball error perfect game right fielder. League suicide squeeze good eye pine tar warning track appeal dribbler retire. Stadium second base batting average third base hardball shortstop bush league shift. Grand slam scorecard arm disabled list pitchout dodgers force season. Nubber club manager rip field base sport leadoff. 4-6-3 steal plunked slide retire rip run. Cookie gold glove cardinals rip can of corn baseball streak suicide squeeze stretch. Rake pickoff team double switch dodgers forkball baltimore chop crooked number. Mustard outside baltimore chop sacrifice bunt leadoff, no decision game scorecard tossed. Petey tapper mustard can of corn fair baseline rally arm.`
})

const optimizeBiz = await Article.create({
    title: '5 Ways to Streamline Your Business',
    author: 'Sean Mercer',
    content: `Your work on this project has been really impactful cloud strategy nor but what's the real problem we're trying to solve here? are there any leftovers in the kitchen?, for in an ideal world three-martini lunch. UX golden goose upstream selling so this is not the hill i want to die on. Closer to the metal run it up the flagpole. Out of the loop. Drink from the firehose diversify kpis we need to crystallize a plan or back to the drawing-board, old boys club synergize productive mindfulness blue sky. Pixel pushing shelfware, but ultimate measure of success or i'll book a meeting so we can solution this before the sprint is over nor viral engagement. On-brand but completeley fresh into the weeds, yet dog and pony show cloud strategy UI, so define the underlying principles that drive decisions and strategy for your design language, nor digitalize. Wheelhouse not enough bandwidth, yet can you ballpark the cost per unit for me. Driving the initiative forward knowledge process outsourcing, or in this space, or i don't want to drain the whole swamp, i just want to shoot some alligators so get six alpha pups in here for a focus group. Optics powerPointless, and come up with something buzzworthy draw a line in the sand, but great plan! let me diarize this, and we can synchronise ourselves at a later timepoint. Run it up the flagpole your work on this project has been really impactful. Hard stop we need a paradigm shift. Exposing new ways to evolve our design language organic growth. Deliverables in an ideal world for bench mark Bob called an all-hands this afternoon, not the long pole in my tent, but ladder up / ladder back to the strategy and quick win. Criticality exposing new ways to evolve our design language for pulling teeth. It's about managing expectations that jerk from finance really threw me under the bus, so who's responsible for the ask for this request?. Sacred cow cross-pollination, yet globalize i’ve been doing some research this morning and we need to better. Upstream selling can you slack it to me? curate. Programmatically quantity so at the end of the day blue sky thinking, so can you slack it to me?. Meeting assassin. Drive awareness to increase engagement it's a simple lift and shift job, game-plan marketing computer development html roi feedback team website. Optics shotgun approach, or cross functional teams enable out of the box brainstorming so build on a culture of contribution and inclusion and a better understanding of usage can aid in prioritizing future efforts hard stop, so on this journey. After I ran into Helen at a restaurant, I realized she was just office pretty we need to socialize the comms with the wider stakeholder community yet drill down. We have put the apim bol, temporarily so that we can later put the monitors on we need to harvest synergy effects. I have zero cycles for this what do you feel you would bring to the table if you were hired for this position hit the ground running. Idea shower. Due diligence. Clear blue water organic growth golden goose I have zero cycles for this we need to dialog around your choice of work attire we need to make the new version clean and sexy we've got to manage that low hanging fruit. Baseline we need to future-proof this meeting assassin, or going forward quick win, nor going forward. Create spaces to explore what’s next overcome key issues to meet key milestones. We need to future-proof this we need to harvest synergy effects so make sure to include in your wheelhouse drill down. Products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved what's our go to market strategy?. Message the initiative we’re all in this together, even if our businesses function differently yet that jerk from finance really threw me under the bus on your plate pipeline. Innovation is hot right now core competencies, or clear blue water not enough bandwidth, and we need to harvest synergy effects powerpoint Bunny. We have put the apim bol, temporarily so that we can later put the monitors on drill down. Pig in a python move the needle can we take this offline, for that jerk from finance really threw me under the bus market-facing, yet accountable talk, nor feature creep. Run it up the flagpole. Fire up your browser not enough bandwidth not enough bandwidth, this proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables nor game plan. Optics. Can we parallel path. Value-added anti-pattern peel the onion but that jerk from finance really threw me under the bus reach out we need to button up our approach. Can we take this offline we want to empower the team with the right tools and guidance to uplevel our craft and build better or productize, or we’re starting to formalize flexible opinions around our foundations we don't want to boil the ocean but due diligence. Even dead cats bounce get all your ducks in a row we are running out of runway sea change create spaces to explore what’s next, or pull in ten extra bodies to help roll the tortoise, but helicopter view. Paddle on both sides. Goalposts time to open the kimono for today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud but draw a line in the sand are we in agreeance, so thought shower, for hit the ground running. Can you slack it to me? wiggle room, or dogpile that but are we in agreeance, so draw a line in the sand, but come up with something buzzworthy. On your plate i’ve been doing some research this morning and we need to better what's our go to market strategy?. Can I just chime in on that one three-martini lunch, drink the Kool-aid please use "solutionise" instead of solution ideas! :). Re-inventing the wheel come up with something buzzworthy we need to build it so that it scales open door policy, and can we take this offline, and this is meaningless nor commitment to the cause . Closer to the metal can we parallel path ramp up, and old boys club we need distributors to evangelize the new line to local markets. Best practices price point we need to crystallize a plan make sure to include in your wheelhouse going forward, yet bench mark, or social currency. I just wanted to give you a heads-up. Deploy out of the loop where the metal hits the meat so it just needs more cowbell nor productize bake it in. Level the playing field this is not the hill i want to die on, guerrilla marketing. We need more paper. Turd polishing move the needle let's prioritize the low-hanging fruit. Due diligence viral engagement thinking outside the box value prop but dog and pony show, so product management breakout fastworks. Teams were able to drive adoption and awareness UX run it up the flag pole at the end of the day I have zero cycles for this, so ramp up, so a better understanding of usage can aid in prioritizing future efforts. Upstream selling. Teams were able to drive adoption and awareness critical mass game plan, mobile friendly, and that jerk from finance really threw me under the bus. To be inspired is to become creative, innovative and energized we want this philosophy to trickle down to all our stakeholders. Land the plane what's our go to market strategy? we want to see more charts for Bob called an all-hands this afternoon player-coach can we parallel path. Synergize productive mindfulness golden goose, for put in in a deck for our standup today and player-coach pulling teeth timeframe, yet herding cats. Streamline are we in agreeance, for hammer out. Re-inventing the wheel. Re-inventing the wheel tbrand terrorists, and data-point beef up, run it up the flagpole please use "solutionise" instead of solution ideas! :) or let's prioritize the low-hanging fruit. Beef up let's unpack that later or nail jelly to the hothouse wall, and land the plane, yet gage [sic] where the industry is heading and give back to the community what we’ve learned. Core competencies we need to start advertising on social media killing it, and upstream selling yet on your plate (let's not try to) boil the ocean (here/there/everywhere). Old boys club pull in ten extra bodies to help roll the tortoise high touch client. Those options are already baked in with this model commitment to the cause for take five, punch the tree, and come back in here with a clear head synergize productive mindfulness onward and upward, productize the deliverables and focus on the bottom line. Prairie dogging. Execute can we parallel path. Design thinking. Wheelhouse drive awareness to increase engagement dear hiring manager: fire up your browser. Productize timeframe. We need distributors to evangelize the new line to local markets in this space nor at the end of the day nobody's fault it could have been managed better diversify kpis. Can we parallel path. My capacity is full criticality . I’ve been doing some research this morning and we need to better net net. Drill down that ipo will be a game-changer touch base, or feature creep, so fire up your browser. We need more paper cross functional teams enable out of the box brainstorming you better eat a reality sandwich before you walk back in that boardroom, so due diligence. Hit the ground running old boys club, or it just needs more cowbell for it's a simple lift and shift job circle back, drive awareness to increase engagement. Draft policy ppml proposal nail it down let's schedule a standup during the sprint to review our kpis nor cannibalize. `
})

const argh = await Article.create({
    title: 'I Am a Pirate Now',
    author: 'Sean Mercer',
    content: `Stern Jack Tar scurvy long boat salmagundi grog hornswaggle yawl fire in the hole Pirate Round. Ye parley bowsprit salmagundi scuttle Privateer square-rigged Plate Fleet tackle swing the lead. Hornswaggle knave grog ho list scuttle crow's nest reef sails fore Sink me. Spanker barque capstan Gold Road chase guns hang the jib fore starboard strike colors Yellow Jack. Squiffy lookout Jack Ketch warp belaying pin cable fire ship nipper topmast scuttle. Matey rope's end ye rigging Arr spanker tack aye lateen sail squiffy. Handsomely Privateer main sheet jack heave down doubloon transom avast maroon brig. Lugsail draught keel line Davy Jones' Locker yard aft code of conduct interloper boom. Fathom Buccaneer Blimey reef sails spanker bowsprit Arr log strike colors dead men tell no tales.`
})

const cursing = await Article.create({
    title: 'On the Virtue of Cursing',
    author: 'Sean Mercer',
    content: `Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends. My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand? Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'? Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.`
})

const npmPacks = await Article.create({
    title: 'An Ode to My Favorite npm Packages',
    author: 'Liz Moy',
    content: "Patch backpack newsroom cafe paywall he said she said reporting discuss, analytics spring tweets dying iPad app The Daily synergize newsonomics MinnPost, crowdfunding advertising just across the wire link economy monetization totally blowing up on Twitter paidContent copyright audience atomization overcome Google+ privacy tweet pay curtain mathewi, get me rewrite writing information overload CPC Nick Denton gotta grok it before you rock it metered model The Weekender. Journal Register production of innocence Gutenberg parenthesis Project Thunderdome MinnPost Alberto Ibarguen Gardening & War section, the audience knows more than I do church of the savvy I love the Weather & Opera section mthomps Chartbeat twitterati WordPress, crowdfunding WaPo retweet paywall open source. Like button information overload perfect for starting a campfire twitterati digital circulation strategy Gannett retweet AP newsonomics WaPo, Bill Keller paidContent Paul Steiger incent 5% corruption plagiarism anonymity WordPress, Rupert Murdoch afternoon paper nonprofit community but what’s the business model tweets data journalism."
})

const wireFrames = await Article.create({
    title: 'Wireframing Essentials for Developers',
    author: 'Liz Moy',
    content: "Community I saw it on Mediagazer natural-born blogger the power of the press belongs to the person who owns one CNN leaves it there newspaper strike, RT Tim Carmody West Seattle Blog stream reporting community link economy, Gannett reporting try PR filters Politics & Socks page synergize. newsonomics process vs. product the medium is the message Bill Keller Wikipedia gamification election-night hologram hot news doctrine news.me media diet WSJ TweetDeck, Steve Jobs kitchen table of the future link economy iPhone app Dayton for under $900 a day Flipboard tweets Pulse mathewi Julian Assange, SEO he said she said Buttry Mozilla morgue if the news is that important, it'll find me Paul Steiger I saw it on Mediagazer linking newspaper strike hyperlocal layoffs Kindle Single digital circulation strategy Innovator's Dilemma Clay Shirky David Cohn Django Arianna Neil Postman CTR, hyperlocal tweet net neutrality hyperlocal Gutenberg Politics & Socks page vast wasteland John Dewey Free Darko. Fuego abundance The Daily Walter Cronkite died for your sins retweet engagement view from nowhere YouTube link economy, nonprofit meme perfect for starting a campfire Instagram Rupert Murdoch Android kitchen table of the future open source SEO, NPR The Printing Press as an Agent of Change the other longer Book Review 5% corruption dying WSJ I love the Weather & Opera section."
})

const faveResources = await Article.create({
    title: 'Wireframing Essentials for Developers',
    author: 'Liz Moy',
    content: "A support boots on the ground innovation ecosystem youth accessibility mobilize, entrepreneur, compelling academic silo effective LGBTQ+. B-corp social innovation shared unit of analysis deep dive natural resources scale and impact revolutionary do-gooder. Co-creation, boots on the ground revolutionary academic social return on investment policymaker unprecedented challenge resist theory of change. Mass incarceration effective, LGBTQ+; preliminary thinking inspirational leverage triple bottom line inspirational when. Ecosystem living a fully ethical life but, systems thinking collaborative consumption humanitarian bandwidth thought partnership do-gooder gender rights. Social intrapreneurship; inspirational inclusion, fairness a inclusive scale and impact social intrapreneurship. Co-create shared vocabulary; change-makers scalable the resistance living a fully ethical life compassion our work. Resilient, vibrant; sustainable movements shared unit of analysis, innovate, data natural resources low-hanging fruit energize living a fully ethical life B-corp mass incarceration. Problem-solvers inspire problem-solvers empower silo indicators, white paper. Scalable, scalable B-corp; strategize contextualize energize. Energize mobilize energize inspiring, uplift preliminary thinking B-corp LGBTQ+, to then. Compassion vibrant game-changer deep dive correlation; white paper technology challenges and opportunities shared vocabulary."
})

const jobSwitch = await Article.create({
    title: 'How I Made the Transition into Web Development',
    author: 'Liz Moy',
    content: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify. Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard. Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach."
})

const myHobbies = await Article.create({
    title: 'All About My Non-Programming Interests',
    author: 'Liz Moy',
    content: "Justice policymaker, social return on investment a shared vocabulary or social innovation resist big data the targeted white paper. Program areas, collaborative consumption do-gooder; engaging social entrepreneurship radical social entrepreneur silo communities gender rights citizen-centered. Policymaker deep dive; technology thought leadership, program areas or shine parse circular greenwashing. Indicators, shared unit of analysis or technology issue outcomes activate. Unprecedented challenge contextualize social entrepreneurship or; innovation green space, leverage philanthropy academic; impact effective leverage disrupt. Do-gooder natural resources overcome injustice families, best practices, radical, our work disrupt, relief our work our work capacity building activate game-changer. Relief ideate academic; benefit corporation."
})

const collab = await Article.create({
    title: '10 Best Practices for Collaborating with UX Designers',
    author: 'Liz Moy',
    content: "Skate ipsum dolor sit amet, hang-up wheels drop in darkslide freestyle spine. Alley oop risers tail Tracker transfer nosegrind. 50-50 lien air late disaster launch ramp rad. Frigid air bigspin airwalk crail slide mute-air tail. Transfer front foot impossible melancholy hardware bearings hard flip. Body varial concave smith grind method air birdie Jeremy Klein frontside air. Frigid air full pipe tailslide Santa Monica Airlines downhill impossible sponsored. Dude pogo lien air full-cab full pipe 270. Kickturn varial ollie north aerial kidney coffin. Street pump Japan air Santa Cruz sick. Fast plant ho-ho Kevin Harris JFA 180. Air rad pressure flip rocket air. Nose-bump body varial hip casper. Melancholy Blind casper grab opposite footed. Upland grind stalefish ho-ho birdie. Coper birdie Christ air tailslide. Late dude tail drop in. Steps flail coping full pipe. Smith grind alley oop mini ramp chicken wing Christ air bean plant. Disaster frigid air frontside finger flip nose slide. Bank axle ollie hole tic-tac lip. Pool hang ten rocket air 540 coper. Town & Country transition ollie north full-cab mongo finger flip. Snake Wade Speyer skater slap maxwell crailtap ollie north. Rip grip cess slide yeah Jeremy Wray ollie north pivot. Backside alley oop nose grab lipslide method air. Boneless ollie north coping fakie out Kevin Jarvis launch ramp. Ollie north pogo transfer gnarly Bare Cover ledge."
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
await allTheInfo.setUser(sean)
await playBall.setUser(sean)
await optimizeBiz.setUser(sean)
await argh.setUser(sean)
await cursing.setUser(sean)
await npmPacks.setUser(liz)
await wireFrames.setUser(liz)
await faveResources.setUser(liz)
await jobSwitch.setUser(liz)
await myHobbies.setUser(liz)
await collab.setUser(liz)

process.exit()

}

main()