const Sequelize = require('sequelize');
// connext to database
const db = new Sequelize('postgres://localhost:4567/iterator_db', {
    dialect: 'postgres'
  });
// define user model
const Users = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    bio: {
        type: Sequelize.TEXT
    },
    photo: {
        type: Sequelize.TEXT
    }
});
// define article model
const Articles = db.define('article', {
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})

// associations

Users.hasmany(Articles, { onDelete: 'cascade' })
Articles.belongsto(Users)

// export modules

module.exports = {
    db,
    Users,
    Articles
}