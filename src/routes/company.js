const express = require('express')
const Route = express.Router()

const {tokenVerify} = require('../helpers/middleware')

const { getCompany, addCompany, updateCompany, deleteCompany } = require('../controllers/company')



Route
    .get('/',tokenVerify,getCompany)
    .post('/',tokenVerify,addCompany)
    .put('/:idcompany',tokenVerify,updateCompany)
    .delete('/:idcompany',tokenVerify,deleteCompany)
module.exports = Route