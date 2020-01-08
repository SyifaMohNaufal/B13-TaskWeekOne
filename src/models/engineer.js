const pool = require('../config/db')

module.exports = {
    getEng: () => {
        return new Promise((resolve,reject) =>{
            pool.query('SELECT * FROM engineer_skill', (err,result)=> {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    
    getEngBy: (ideng) => {
        return new Promise((resolve,reject) =>{
            pool.query('SELECT * FROM engineer_skill where id_eng LIKE ?', ['%'+ideng+'%'], (err,result)=> {
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
    getSearchSort: (engName = '', skillName = '', sortParam = '', sortChoose = '', limit='', offset='') => {
        return new Promise((resolve,reject) =>{ 
            let query = `SELECT * FROM engineer_skill WHERE eng_name LIKE '%${engName}%' AND skill_name LIKE '%${skillName}%' ORDER BY ${sortParam} ${sortChoose}`
            if (limit) {
                query = query + ` limit ${limit}`
            }
            if (offset) {
                query = query + ` offset ${offset}`
            }
            pool.query(query, (err,result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getSearchSkill: (skill_name) => {
        return new Promise((resolve,reject) =>{ 
            pool.query(`SELECT * FROM engineer_skill WHERE skill_name LIKE '%${skill_name}%' OR eng_name LIKE '%${skill_name}%' OR eng_desc LIKE '%${skill_name}%'`, (err,result) => {
                if(!err) {
                    resolve(result)
                    console.log(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}
