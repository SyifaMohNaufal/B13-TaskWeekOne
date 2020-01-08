require('dotenv/config')

const companyModel = require('../models/company')
const { response } = require('../helpers/helpers')
const jwt_decode = require('jwt-decode')

module.exports = {
    getCompany: (req, res) => {
        companyModel.getCompany()
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })    
    },
    addCompany: (req, res) => {
        const token=req.header['authorizaton']
        const  decoded = jwt_decode(token)
        const iduser = decoded.pload.id_user
        const {company_name, company_location, company_desc } = req.body
        
        const data = {
            company_name,
            company_logo: req.file.filename,
            company_location,
            company_desc,
            id_user: iduser,
        }
        companyModel.addCompany(data)
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    updateCompany: (req, res) =>{
        const id_company = req.params.id_company
        const { company_name, company_location, company_desc } = req.body
        const data = {
            company_name,
            company_logo: req.file.filename,
            company_location,
            company_desc,
            updated_At: new Date ()
        }
        companyModel.updateCompany(data, id_company)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    findCompanyById: (req, res) => {
        const id_company = req.params.id_company;
    
        companyModel
          .findCompanyById(id_company)
          .then(result => {
            response(res, 200, result);
          })
          .catch(err => {
            console.log(err);
          });
      },
      findCompanyByIduser: (req, res) => {
        const id_user = req.params.id_user;
    
        companyModel
          .findCompanyByIduser(id_user)
          .then(result => {
            response(res, 200, result);
          })
          .catch(err => {
            console.log(err);
          });
      },
    deleteCompany: (req, res) => {
        const id_company = req.params.id_company

        companyModel.deleteCompany(id_company)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
}