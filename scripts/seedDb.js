const { Users, Articles } = require('../models')

const main = async () => {
// delete database
await Users.destroy({
    where: {}
})
await Articles.destroy({
    where: {}
})

// seed data -- users

const test1 = await Users.create({
    name: 'Bizarro Galvao',
    email: 'bizarrogalvao@aol.com',
    username: 'galvbiz',
    bio: 'This is a bio.',
    photo: 'https://pbs.twimg.com/profile_images/1016420986755997706/YOGIGdIm_400x400.jpg'
})

// articles

const article1 = await Articles.create({
    title: 'Why I love Jasmine juicebox tea',
    author: 'B. Galvao',
    content: 'This is the content of my article.'
})

// association

await article1.setUsers(test1)

process.exit()

}

main()