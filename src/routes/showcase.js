const express = require('express')
const Route = express.Router()

const { getShowcase, addShowcase, updateShowcase, deleteShowcase } = require('../controllers/showcase')



Route
    .get('/',getShowcase)
    .post('/',addShowcase)
    .put('/:idshowcase',updateShowcase)
    .delete('/:idshowcase',deleteShowcase) 
     

module.exports = Route