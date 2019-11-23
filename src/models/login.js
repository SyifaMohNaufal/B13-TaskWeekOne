const pool= require('../config/db')


module.exports = {
    
    getDataLogin: (name) => {
        return new Promise( (resolve,reject) =>{
            pool.query('SELECT * FROM user WHERE username = ?', name, (err,result) => {
                if(err){
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    },
    updateToken: (token , id) => {
        return new Promise( (resolve,reject) =>{
            pool.query(`UPDATE user SET auth ='${token}' WHERE id_user ='${id}'`,  (err,result) => {
                console.log(id)
                if(err){
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    },
    getToken: (idUser) => {
        return new Promise((resolve, reject) => {
          pool.query(`SELECT auth FROM user WHERE id_user = '${idUser}' `, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    offToken: (idUser) => {
        return new Promise( (resolve,reject) =>{
            console.log(idUser)
            pool.query(`UPDATE user SET auth = null WHERE id_user ='${idUser}'`,  (err,result) => {
                
                if(err){
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
}


