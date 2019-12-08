require('dotenv/config')

const hireModel = require('../model/hire')
const { response } = require('../helpers/helpers')
const moment = require('moment')

module.exports = {
  addHire: (req, res) => {   
    const { id_project, id_eng, fee, project_job } = req.body
    const data =  {
      id_project,
      id_eng,
      fee,
      project_job,
      createdAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    }

    hireModel.addHire(data)
      .then(result => {
        response(res, 200, result)
      })
      .catch(err => {
        err={Msg: "Failed input to database!"}
        response(res, 400, err)
      })
  }
}