const {getDataLogin,offToken} = require('../models/login')
const {validationLogin} = require('../helpers/auth')
const jwt_decode = require('jwt-decode')


module.exports = {

    login : async (req, res) => {
            
        let data = {
            username: req.body.username,
            password: req.body.password
        }

        try {
            let userData = await getDataLogin(data.username)
            let result = validationLogin(data, userData)
            let result2 = {
                id: userData[0].id_user,
                token: result,
                level:  userData[0].level
            }

            res.send(result2)
        } catch (error) {
            console.log(error)
        }
    },
    logOut: (req,res)=>{
            const token = req.headers['authorization']
            console.log('token', token)
            var decoded = jwt_decode(token);
            const idUser = decoded.pload.id_user
                  console.log('token', idUser)
            offToken(idUser)
            .then(result => {
              result = {
                Msg: "Logout Successfully!"
              }
              res.send(result)
            })
            .catch(err => {
              err = {
                Msg: "Failed to logout",
              }
              res.send(err)
            })
          }
    }

