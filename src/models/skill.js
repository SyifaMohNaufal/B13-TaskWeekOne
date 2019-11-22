const pool = require('../config/db')

module.exports = {
    getSkill: () => {
        return new Promise((resolve,reject) =>{
            pool.query('SELECT * FROM skill JOIN engineer ON skill.id_eng = engineer.id_eng', (err,result)=> {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addSkill: (data) => {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO skill SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateSkill: (data, idskill) => {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE skill SET ? WHERE id_skill= ?', [data, idskill], (err,result)=> {
               if (!err) {
                   resolve(result)
               } else {
                  console.log(new Error(err))
               }
            })
        })
    },
    deleteSkill: (idskill) => {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM skill WHERE id_skill = ?', idskill, (err, result) =>{
               if (!err) {
                   resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}