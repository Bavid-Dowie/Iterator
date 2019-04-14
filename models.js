const Sequelize = require('sequelize');

// connext to database
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/iterator_db', {
  dialect: 'postgres'
});

// define user model
const User = db.define('user', {
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
const Article = db.define('article', {
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
User.hasMany(Article, { onDelete: 'cascade' })
Article.belongsTo(User)

// export modules
module.exports = {
    db,
    User,
    Article
}