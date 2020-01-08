const pool = require('../config/db')

module.exports = {
    getProj: () => {
        return new Promise((resolve,reject) =>{
            pool.query('SELECT * FROM project', (err,result)=> {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getStatus: () => {
        return new Promise((resolve,reject) =>{
            pool.query('SELECT * FROM v_projeng', (err,result)=> {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getProjBy: (idComp) => {
        return new Promise((resolve,reject) =>{
            id_company = `${idComp}`
            pool.query('SELECT * FROM project WHERE id_company = ?', [id_company], (err,result)=> {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    
    addProj: (data) => {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO project SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addProjeng: (data) => {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO project_eng SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateProj: (data, idproj) => {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE project SET ? WHERE id_proj= ?', [data, idproj], (err,result)=> {
               if (!err) {
                   resolve(result)
               } else {
                  console.log(new Error(err))
               }
            })
        })
    },
    deleteProj: (idproj) => {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM project WHERE id_proj = ?', idproj, (err, result) =>{
               if (!err) {
                   resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}
