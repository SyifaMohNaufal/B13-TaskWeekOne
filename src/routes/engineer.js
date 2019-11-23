const express = require('express')
const Route = express.Router()

const {tokenVerify} = require('../helpers/middleware')

const { getEng, addEng, updateEng, deleteEng, getSearchSort} = require('../controllers/engineer')



Route
    .get('/',tokenVerify,getEng)
    .post('/',tokenVerify,addEng)
    .put('/:ideng',tokenVerify,updateEng)
    .delete('/:ideng',tokenVerify,deleteEng)
    .get('/search',tokenVerify,getSearchSort)

module.exports = Route