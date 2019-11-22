const express = require('express')
const Route = express.Router()

const { getUsers, addUsers, updateUsers, deleteUsers, findUserId } = require('../controllers/user')



Route
    .get('/',getUsers)
    .post('/',addUsers)
    .put('/:iduser',updateUsers)
    .delete('/:iduser',deleteUsers)
    .get('/:userid',findUserId)

module.exports = Route