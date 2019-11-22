require('dotenv/config')

const userModel = require('../models/user')
const { response } = require('../helpers/helpers')

module.exports = {
    getUsers: (req, res) => {
        userModel.getUsers()
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    addUsers: (req, res) => {
        const {username, password, email, name} = req.body
        const data = {
            username,
            password,
            email,
            name,
            created_At: new Date(),
            updated_At: new Date()
        }
        userModel.addUsers(data)
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    },
        updateUsers: (req, res) =>{
            const iduser = req.params.iduser
            const { username, password, email, name } = req.body
            const data = {
                username,
                password,
                email,
                name,
                updated_At: new Date()
            }
            userModel.updateUsers(data, iduser)
            .then(result =>{
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
        },
        deleteUsers: (req, res) => {
            const iduser = req.params.iduser

            userModel.deleteUsers(iduser)
            .then(result=> {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
        },
        findUserId: (req, res) => {
            const userid = req.params.userid
    
            userModel.findUserId(userid)
            .then(result => {
                response(res, 200, result)
            })
            .catch(err => {
                console.log(err)
            })
        }
}
    