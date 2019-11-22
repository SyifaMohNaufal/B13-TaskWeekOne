require('dotenv').config()
const server = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const PORT = process.env.PORT

const route = require('./src/index')

server.listen(PORT, () => {
    console.log(`this server is running on port ${PORT}`)
})
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}))
server.use(morgan('dev'))

server.use('/', route)

server.get('/', (req,res) => {
    res.send({message: 'Hello Arkademian!'})
})

module.exports = server

