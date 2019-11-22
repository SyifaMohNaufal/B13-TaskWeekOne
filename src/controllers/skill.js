require('dotenv/config')

const skillModel = require('../models/skill')
const { response } = require('../helpers/helpers')

module.exports = {
    getSkill: (req, res) => {
        skillModel.getSkill()
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    addSkill: (req, res) => {
        const { id_eng, skill_name, skill_level } = req.body
        
        const data = {
            id_eng,
            skill_name,
            skill_level
        }

        skillModel.addSkill(data)
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
        updateSkill: (req, res) =>{
            const idskill = req.params.idskill
            const { id_eng, skill_name, skill_level } = req.body
            const data = {
                id_eng,
                skill_name,
                skill_level
            }
            skillModel.updateSkill(data, idskill)
            .then(result =>{
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
        },
        deleteSkill: (req, res) => {
            const idskill = req.params.idskill

            skillModel.deleteSkill(idskill)
            .then(result=> {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
        }
        
}