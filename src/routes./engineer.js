const express = require('express')
const Route = express.Router()
const multer = require('multer')
const path = require('path')

// const {tokenVerify} = require('../helpers/middleware')

const { getEng, addEng, updateEng, deleteEng, getSearchSort} = require('../controllers/engineer')

const storage = multer.diskStorage({

    destination : path. join (__dirname + '/src/image')
,

    filename: (req, file, cb) =>{
        cb(null,file.fieldname + '-' + Date.now() +
        path.extname(file.originalname));
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
    .get('/',getEng)
    .post('/', upload.single('eng_image'), addEng)
    .put('/:ideng',upload.single('eng_image'), updateEng)
    .delete('/:ideng',deleteEng)
    .get('/search',getSearchSort)

module.exports = Route