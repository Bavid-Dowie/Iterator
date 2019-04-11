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

// association

await article1.setUser(test1)

process.exit()

}

main()