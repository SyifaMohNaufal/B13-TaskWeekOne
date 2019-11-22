require('dotenv/config')
const bcrypt = require('bcryptjs')
const uuid = require('uuid/v4')
const JWT = require('jsonwebtoken')
const loginModel = require('../models/login')


module.exports = {
    tokenVerify: (req, res, next) => {
        const token = req.headers.authorization
        
        JWT.verify(token, process.env.KEYS, (err, result) => {
            if (err && err.name === 'TokenExpiredError') res.send('Token Expired')
            if (err && err.name === 'JsonWebTokenError') res.send('Token Error')
            next()    
        })
    },
    hashPassword: (data) => {

        const random = bcrypt.genSaltSync(10)
        const hashData= bcrypt.hashSync(data,random)
        
        return hashData
    },
    validationLogin: (reqData, userData) => {
        if (userData.length !=0) {

            let passFromReq = reqData.password
            let passFromSql = userData[0].password
            let id = userData[0].id_user

            const pload = {
                id_user: id,
                password: passFromReq,
                uuid: uuid
            }
            
            if (bcrypt.compareSync(passFromReq, passFromSql)) {
                const token = JWT.sign({pload}, process.env.KEYS, 
                    {expiresIn: '1000m'})
                    loginModel.updateToken(token, pload.id_user)
                    console.log(pload)
                return token
                // return "Masuk"
            } else {
                return "Password wrong!!"
            }
        } else {
                return "Check your username!!"
            }
    }
}
