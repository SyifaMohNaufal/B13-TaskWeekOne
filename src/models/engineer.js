const pool = require('../config/db')

module.exports = {
    getEng: () => {
        return new Promise((resolve,reject) =>{
            pool.query('SELECT * FROM engineer LEFT JOIN skill ON skill.id_eng = engineer.id_eng LEFT JOIN showcase ON showcase.id_eng = engineer.id_eng ', (err,result)=> {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addEng: (data) => {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO engineer SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateEng: (data, ideng) => {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE engineer SET ? WHERE id_eng= ?', [data, ideng], (err,result)=> {
               if (!err) {
                   resolve(result)
               } else {
                  console.log(new Error(err))
               }
            })
        })
    },
    deleteEng: (ideng) => {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM engineer WHERE id_eng = ?', ideng, (err, result) =>{
               if (!err) {
                   resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getSearchSort: (engName, skillName, sortParam, sortChoose, limit, offset) => {
        return new Promise((resolve,reject) =>{
            pool.query(`SELECT * FROM engineer_skill WHERE eng_name LIKE '%${engName}%'  AND skill_name LIKE '%${skillName}%' ORDER BY ${sortParam} ${sortChoose} LIMIT ${limit} OFFSET ${offset}`, (err,result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}
