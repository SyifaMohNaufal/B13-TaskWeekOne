require('dotenv/config')

const projModel = require('../models/projects')
const { response } = require('../helpers/helpers')

module.exports = {
    getProj: (req, res) => {
        projModel.getProj()
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    getProjBy: async (req, res) => {
        const token = req.headers['authorization']
        const decoded = jwt_decode(token);
        const IdUserComp = decoded.id_user
        try {
            let getIdComp = await companyModel.findCompanyByIdUser(IdUserComp)
            var idComp = getIdComp[0].id_company
        } catch (error) {
            response(res, 400, error)
          }

        projModel.getProjBy(idComp)
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    addProj: async (req, res) => {
        const token = req.headers['authorization']
        const decoded = jwt_decode(token)
        const iduser = decoded.id_user
        try {
            let getIdComp = await companyModel.findCompanyByIdUser(idUser)
            var idComp = getIdComp[0].id_company
          } catch (error) {
            console.log(error)
          }

        const {proj_name, proj_desc, proj_deadline, proj_fee } = req.body
        
        const data = {
            proj_name,
            proj_desc,
            proj_deadline,
            proj_fee,
            id_company: idComp,
            id_user: iduser,
            createdAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
            updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        }

        projModel.addProj(data)
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    updateProj: (req, res) =>{
        const idproj = req.params.idproj
        const { proj_name, proj_desc, proj_deadline, proj_fee } = req.body
        const data = {
            proj_name,
            proj_desc,
            proj_deadline,
            proj_fee,
        }
        projModel.updateProj(data, idproj)
        .then(result =>{
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    deleteProj: (req, res) => {
        const idproj = req.params.idproj

        projModel.deleteProj(idproj)
        .then(result=> {
            res.json(result)
        })
        .catch(err => {
              console.log(err)
        })
    }
}