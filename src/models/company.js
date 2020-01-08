const pool = require('../config/db')

module.exports = {
    getCompany: () => {
        return new Promise((resolve,reject) =>{
            pool.query('SELECT * FROM company', (err,result)=> {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addCompany: (data) => {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO company SET ?', data, (err,result) =>{
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateCompany: (data, id_company) => {
        return new Promise((resolve,reject) => {
            pool.query('UPDATE company SET ? WHERE id_company= ?', [data, id_company], (err,result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error (err))
                }
            })
        })
    },
    findCompanyByIduser: (id_user) => {
        return new Promise((resolve, reject) => {
         
         console.log(id_user)
          pool.query('SELECT * FROM company WHERE id_user = ?', id_user, (err,result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteCompany: (id_company) => {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM company WHERE id_company = ?', id_company, (err, result)=> {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}