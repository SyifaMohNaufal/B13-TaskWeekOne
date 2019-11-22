const express = require('express')
const Route = express.Router()

const { getCompany, addCompany, updateCompany, deleteCompany } = require('../controllers/company')



Route
    .get('/',getCompany)
    .post('/',addCompany)
    .put('/:idcompany', updateCompany)
    .delete('/:idcompany',deleteCompany)
module.exports = Route