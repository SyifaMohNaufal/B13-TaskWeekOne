require('dotenv/config')
const moment = require('moment')
const regisModel = require('../models/register')
const { response } = require('../helpers/helpers')
const {hashPassword} = require('../helpers/auth')

module.exports = {
    addRegis: (req, res) => {
        const {username, password, email, name} = req.body
        
        const passwordHash = hashPassword(password)
        const data = {
            username,
            password: passwordHash,
            email,
            name,
            created_At: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
            updated_At: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        }
        regisModel.addRegis(data)
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            console.log(err)
        })
    }
}