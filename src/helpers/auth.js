require('dotenv/config')
const bcrypt = require('bcryptjs')
const uuid = require('uuid/v4')
const JWT = require('jsonwebtoken')
const loginModel = require('../models/login')
const moment = require('moment')


module.exports = {
    
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

                // const tokenDb = JWT.sign({id_user: userData[0].id_user, username: userData[0].username, email: userData[0].email, name: userData[0].name }, process.env.KEYS, { expiresIn: '24h' })
                // let updateDt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                
                // loginModel.updateToken(tokenDb, userData[0].id_user, updateDt)

                const token = JWT.sign({pload}, process.env.KEYS, {expiresIn: '1000m'})
                                      loginModel.updateToken(token, pload.id_user)
                                      console.log(pload)
                
                return({
                  success: true,
                  message: 'Authentication successful!',
                  token: token
                })
              } else {
                return({
                  success: false,
                  message: 'Authentication failed! Please check the request'
                })
              } 
            } else {
              return "Wrong username"
            }
          }
        }
 //                 const token = JWT.sign({pload}, process.env.KEYS, 
//                     {expiresIn: '1000m'})
//                     loginModel.updateToken(token, pload.id_user)
//                     console.log(pload)
//                 return token
//             } else {
//                 return "Password wrong!!"
//         }
//             } else {
//                 return "Check your username!!"
//         }
//     }
// }
