const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use("/", express.static("./build/"));
app.use(bodyParser.json())

//import models
const {User, Article} = require ('./models')
const PORT = process.env.PORT || 3001   

app.get('/', (req, res) => res.send('Sup yo'))

app.get('/users', async (req, res) => {
    try {
        const allUsers = await User.findAll({raw: true})
        res.json(
            allUsers
        )
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.get('/articles', async (req, res) => {
    try {
        const allArticles = await Article.findAll({raw: true})
        res.json({
            allArticles
        })
    } catch (error) {
        res.status(500).json({
          message: error.message  
        })
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        console.log(id)
        const oneUser = await User.findByPk(id)
        if (!oneUser) throw Error ('User not found')
        res.json(oneUser)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.post('/users', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/articles', async (req, res) => {
    try {
        const newArticle = await Article.create(req.body)
        res.json(newArticle)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/articles/:id', async (req, res) => {
    try {
        const articleId = parseInt(req.params.id)
        const oneArticle = await Article.findByPk(articleId)
        res.json(oneArticle)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id)
        const updatedUser = {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            bio: req.body.bio,
            photo: req.body.photo
        }
        const user = await User.update(updatedUser, {where: {id: userId}})
        res.json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.put('articles/:id', async (req, res) => {
    try {
        const articleId = parseInt(req.params.id)
        const updateArticle = {
            title: req.body.title,
            author: req.body.author,
            content: req.body.content
        }
        const article = await Article.create(updateArticle)
        res.json(article)
    } catch (error) {
        
    }
})



app.listen(PORT, () => console.log(`Iterator listening on port ${PORT}`))