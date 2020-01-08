const express = require('express')
const Route = express.Router()

const {tokenVerify} = require('../helpers/middleware')
const { getSkill, addSkill, updateSkill, deleteSkill } = require('../controllers/skill')



Route
    .get('/',tokenVerify,getSkill)
    .post('/',tokenVerify,addSkill)
    .put('/:ideng',tokenVerify,updateSkill)
    .delete('/:idskill',tokenVerify,deleteSkill) 
     

module.exports = Route