const express = require('express')
const Route = express.Router()

// const {tokenVerify} = require('../helpers/middleware')

const { getProj, getProjBy, addProj, updateProj, deleteProj } = require('../controllers/projects')



Route
    .get('/',
                // tokenVerify,
                                    getProj)
    .get('/:idproj', getProjBy)
    .post('/',
                // tokenVerify,
                                    addProj)
    .put('/:idproj',
                 // tokenVerify,
                                    updateProj)
    .delete('/:idproj',
                // tokenVerify,
                                    deleteProj) 
     

module.exports = Route