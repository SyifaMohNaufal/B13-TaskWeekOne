const express = require('express')
const Route = express.Router()

const {login,logOut} = require('../controllers/login')

Route
    .post('/',login)
    .delete('/out',logOut)

module.exports = Route