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
    updateCompany: (data, idcompany) => {
        return new Promise((resolve,reject) => {
            pool.query('UPDATE company SET ? WHERE id_company= ?', [data, idcompany], (err,result) => {
                if (!err) {
                    resolve(result)
                } else {
                    console.log(new Error (err))
                }
            })
        })
    },
    deleteCompany: (idcompany) => {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM company WHERE id_company = ?', idcompany, (err, result)=> {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}