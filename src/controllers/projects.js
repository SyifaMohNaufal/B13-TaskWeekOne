require('dotenv/config')

const projModel = require('../models/projects')
const companyModel = require('../models/company')
const { response } = require('../helpers/helpers')
const moment = require('moment')
const jwt_decode = require('jwt-decode')

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
    getStatus: (req, res) => {
        projModel.getStatus()
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
        const IdUserComp = decoded.pload.id_user
        try {
            let getIdUserComp = await companyModel.findCompanyByIdUser(IdUserComp)
            var idUserComp = getIdUserComp[0].id_company
        } catch (error) {
            response(res, 400, error)
          }
        // const idComp = req.params.id_company
        projModel.getProjBy(idUserComp)
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
        const id_user = decoded.pload.id_user
        try {
            let getIdComp = await companyModel.findCompanyByIduser(id_user)
            var idComp = getIdComp[0].id_company
            console.log(getIdComp)
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
            id_user: id_user,
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
    addProjeng: async (req, res) => {
     
        const {id_proj, id_eng } = req.body
        
        const data = {
            id_proj,
            id_eng,
            createdAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
            updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        }

        projModel.addProjeng(data)
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