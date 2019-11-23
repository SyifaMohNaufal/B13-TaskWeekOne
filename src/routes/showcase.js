const express = require('express')
const Route = express.Router()

const {tokenVerify} = require('../helpers/middleware')

const { getShowcase, addShowcase, updateShowcase, deleteShowcase } = require('../controllers/showcase')



Route
    .get('/',tokenVerify,getShowcase)
    .post('/',tokenVerify,addShowcase)
    .put('/:idshowcase',tokenVerify,updateShowcase)
    .delete('/:idshowcase',tokenVerify,deleteShowcase) 
     

module.exports = Route