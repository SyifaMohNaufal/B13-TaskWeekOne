require('dotenv/config')

const showcaseModel = require('../models/showcase')
const { response } = require('../helpers/helpers')

module.exports = {
    getShowcase: (req, res) => {
        showcaseModel.getShowcase()
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    addShowcase: (req, res) => {
        const { id_eng, showcase } = req.body
        
        const data = {
            id_eng,
            showcase
        }

        showcaseModel.addShowcase(data)
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
        updateShowcase: (req, res) =>{
            const idshowcase = req.params.idshowcase
            const { id_eng, showcase } = req.body
            const data = {
                id_eng,
                showcase
            }
            showcaseModel.updateShowcase(data, idshowcase)
            .then(result =>{
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
        },
        deleteShowcase: (req, res) => {
            const idshowcase = req.params.idshowcase

            showcaseModel.deleteShowcase(idshowcase)
            .then(result=> {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
        }
        
}