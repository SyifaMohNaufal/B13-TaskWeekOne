const express = require('express')
const Route = express.Router()

const { addRegis } = require('../controllers/register')



Route
    .post('/',addRegis)

module.exports = Route