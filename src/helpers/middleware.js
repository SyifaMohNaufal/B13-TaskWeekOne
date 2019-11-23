const JWT = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')
const { response } = require('../helpers/helpers')
const loginModel = require('../models/login')

module.exports = {
    tokenVerify: (req, res, next) => {
        const token = req.headers.authorization
        
        if(!token){
            result = {
                msg: "Please login or register"
            }
            Response(res,400,result)
        }

        var decoded = jwt_decode(token)
        const idUser = decoded.id_user

        loginModel.getToken(idUser)
        .then(result => {
            let tokenDb = result[0].auth
            if (token == tokenDb){
                if (typeof token != 'undefined') {
                    JWT.verify(token, process.env.KEYS, (err, decoded) => {
                        if (err){

                            result = {
                                success: false,
                                msg: 'token is not valid'
                            }
                            Response(res, 400, result)
                        } else {
                            req.decoded = decoded
                            next()
                        }
                    })
                } else {
                    result = {
                      success: false,
                      message: 'Auth token is not supplied'
                    }
                    response(res, 400, result)
                  }
                } else {
                    result = {
                        success: false,
                        msg: 'please relogin'
                    }
                    response(res, 400, result)
                }
            })
            .catch(err => {
                response(res, 400, err)
            })
        }
    }