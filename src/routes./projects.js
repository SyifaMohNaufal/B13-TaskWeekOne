const express = require('express')
const Route = express.Router()

// const {tokenVerify} = require('../helpers/middleware')

const { getProj, getProjBy, addProj, addProjeng, updateProj, deleteProj, getStatus } = require('../controllers/projects')



Route
    .get('/', getProj)
    .get('/status', getStatus)
    .get('/:idComp', getProjBy)
    .post('/', addProj)
    .post('/projeng', addProjeng)
    .put('/:idproj', updateProj)
    .delete('/:idproj', deleteProj) 
     

module.exports = Route