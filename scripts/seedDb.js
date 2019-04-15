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

// association

await article1.setUser(test1)
await codeMovies.setUser(maddy)
await cssAni.setUser(maddy)
await dreamJob.setUser(maddy)
await faveBooks.setUser(maddy)
await etsyAPI.setUser(maddy)
await karaoke.setUser(maddy)

process.exit()

}

main()