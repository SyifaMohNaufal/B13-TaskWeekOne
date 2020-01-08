const pool = require('../config/db')

module.exports = {
    getUsers: () => {
        return new Promise((resolve,reject) =>{
            pool.query('SELECT * FROM user', (err,result)=> {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addUsers: (data) => {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO user SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateUsers: (data, iduser) => {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE user SET ? WHERE id_user= ?', [data, iduser], (err,result)=> {
               if (!err) {
                   resolve(result)
               } else {
                  console.log(new Error(err))
               }
            })
        })
    },
    deleteUsers: (iduser) => {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM user WHERE id_user = ?', iduser, (err, result) =>{
               if (!err) {
                   resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    findUserId: (userid) => {
        return new Promise((resolve,reject) =>{
            pool.query('SELECT * FROM user WHERE username = ?', [userid], (err,result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}