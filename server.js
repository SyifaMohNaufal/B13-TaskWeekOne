require('dotenv').config()
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
// const uploadDir = require('path').join(__dirname + './src/uploads_eng')

const PORT = process.env.PORT

const route = require('./src/index')

server.listen(PORT, () => {
    console.log(`this server is running on port ${PORT}`)
})
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}))
server.use(morgan('dev'))
server.use(cors({
    origin: '*'
}))



server.get('/', (req,res) => {
    res.send({message: 'Hello Arkademian!'})
})

server.use('/', route)
server.use(express.static('src/routes/src'))

module.exports = server

