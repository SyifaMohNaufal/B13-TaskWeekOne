const bcrypt = require('bcryptjs')

module.export = { 
 getHash : (data) => {
    const random = bcrypt.genSaltSync(10)
    const hashData= bcrypt.hashSync(data,random)
    
    return hashData
    }
}