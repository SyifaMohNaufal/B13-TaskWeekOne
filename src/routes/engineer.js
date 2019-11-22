const express = require('express')
const Route = express.Router()

const { getEng, addEng, updateEng, deleteEng, getSearchSort} = require('../controllers/engineer')



Route
    .get('/',getEng)
    .post('/',addEng)
    .put('/:ideng',updateEng)
    .delete('/:ideng',deleteEng)
    .get('/search', getSearchSort)

module.exports = Route