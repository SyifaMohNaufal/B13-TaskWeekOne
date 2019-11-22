const pool = require('../config/db')

module.exports = {
    getShowcase: () => {
        return new Promise((resolve,reject) =>{
            pool.query('SELECT * FROM showcase JOIN engineer ON showcase.id_eng = engineer.id_eng', (err,result)=> {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addShowcase: (data) => {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO showcase SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateShowcase: (data, idshowcase) => {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE showcase SET ? WHERE id_showcase= ?', [data, idshowcase], (err,result)=> {
               if (!err) {
                   resolve(result)
               } else {
                  console.log(new Error(err))
               }
            })
        })
    },
    deleteShowcase: (idshowcase) => {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM showcase WHERE id_showcase = ?', idshowcase, (err, result) =>{
               if (!err) {
                   resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}