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
        const iduser = decoded.id_user
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
        const idcompany = req.params.idcompany
        const { company_name, company_location, company_desc } = req.body
        const data = {
            company_name,
            company_logo: req.file.filename,
            company_location,
            company_desc,
            updated_At: new Date ()
        }
        companyModel.updateCompany(data, idcompany)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    findCompanyById: (req, res) => {
        const idcompany = req.params.idcompany;
    
        companyModel
          .findCompanyById(idcompany)
          .then(result => {
            response(res, 200, result);
          })
          .catch(err => {
            console.log(err);
          });
      },
    //   findCompanyByUserName: (req, res) => {
    //     const userName = req.params.username;
    
    //     companyModel
    //       .findCompanyByUserName(userName)
    //       .then(result => {
    //         response(res, 200, result);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   },
    deleteCompany: (req, res) => {
        const idcompany = req.params.idcompany

        companyModel.deleteCompany(idcompany)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
}