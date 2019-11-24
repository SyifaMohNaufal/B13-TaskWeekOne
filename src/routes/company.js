const express = require('express')
const Route = express.Router()
const multer = require('multer')


const {tokenVerify} = require('../helpers/middleware')

const { getCompany, addCompany, updateCompany, deleteCompany } = require('../controllers/company')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,'./src/uploads');
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    // limits: {
    //   fileSize: 1024 * 1024 * 5
    // },
    fileFilter: fileFilter
  });
  

Route
    .get('/',tokenVerify,getCompany)
    .post('/',tokenVerify,upload.single('company_logo'),addCompany)
    .put('/:idcompany',tokenVerify,upload.single('company_logo'),updateCompany)
    .delete('/:idcompany',tokenVerify,deleteCompany)

module.exports = Route