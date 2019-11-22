const pool = require('../config/db')

module.exports = {
    addRegis: (data) =>{
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO user SET ?', data, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}