require('dotenv/config')

const engModel = require('../models/engineer')
const { response } = require('../helpers/helpers') 
const jwt_decode = require('jwt-decode')

module.exports = {
    getEng: (req, res) => {
        engModel.getEng()
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    getEngBy: (req, res) => {
        const ideng = req.params.ideng

        engModel.getEngBy(ideng)
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    addEng: (req, res) => {
        const token = req.headers['authorization']
        const decoded = jwt_decode(token);
        const iduser = decoded.id_user

        const {eng_name, eng_desc, project, success, eng_location, eng_dob } = req.body
        
        const data = {
            eng_name,
            eng_username,
            eng_image:  'http://localhost:3014/image/'+req.file.filename,
            eng_desc,
            project,
            success,
            eng_location,
            eng_dob,
            id_user: iduser,
            created_At: new Date(),
            updated_At: new Date()
        }

        engModel.addEng(data)
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    updateEng: (req, res) =>{
        const ideng = req.params.ideng
        const { eng_name, eng_desc, eng_location, eng_dob } = req.body
        const data = {
            username_eng,
            eng_name,
            eng_image:   'http://localhost:3014/image/'+req.file.filename,
            eng_desc,
            eng_location,
            eng_dob,
            updated_At: new Date()
        }
        engModel.updateEng(data, ideng)
        .then(result =>{
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    deleteEng: (req, res) => {
        const ideng = req.params.ideng

        engModel.deleteEng(ideng)
        .then(result=> {
            res.json(result)
        })
        .catch(err => {
              console.log(err)
        })
    },
    getSearchSort: (req, res) => {
        const engName = req.query.engName
        const skillName = req.query.skillName
        const sortParam = req.query.sortParam
        const sortChoose = req.query.sortChoose
        const limit = req.query.limit
        const offset = req.query.offset

        engModel.getSearchSort(engName, skillName, sortParam, sortChoose, limit, offset)
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    // findEngByUserName: (req, res) => {
    //     const userName = req.params.username;
    
    //     engModel
    //       .findEngByUserName(userName)
    //       .then(result => {
    //         response(res, 200, result);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   },
}
