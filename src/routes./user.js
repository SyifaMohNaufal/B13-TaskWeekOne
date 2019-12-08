const express = require('express')
const Route = express.Router()

const {tokenVerify} = require('../helpers/middleware')

const { getUsers, addUsers, updateUsers, deleteUsers, findUserId } = require('../controllers/user')


Route
    .get('/',tokenVerify, getUsers)
    .post('/',addUsers)
    .put('/:iduser',tokenVerify,updateUsers)
    .delete('/:iduser',tokenVerify,deleteUsers)
    .get('/:userid',tokenVerify,findUserId)

module.exports = Route