const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
// app.use(cors())
// app.use("/", express.static("./build/"));
app.use(bodyParser.json())

//import models
const {User, Article} = require ('./models')
const PORT = process.env.PORT || 3001   

app.get('/', (req, res) => res.send('Sup yo'))

app.get('/user', async (req, res) => {
    try {
        const allUsers = await User.findAll({raw: true})
        res.json({
            allUsers
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.listen(PORT, () => console.log(`Iterator listening on port ${PORT}`))