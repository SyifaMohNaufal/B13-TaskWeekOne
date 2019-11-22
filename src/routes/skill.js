const express = require('express')
const Route = express.Router()

const { getSkill, addSkill, updateSkill, deleteSkill } = require('../controllers/skill')



Route
    .get('/',getSkill)
    .post('/',addSkill)
    .put('/:idskill',updateSkill)
    .delete('/:idskill',deleteSkill) 
     

module.exports = Route