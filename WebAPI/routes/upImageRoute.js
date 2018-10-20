let uploadController = require('../controllers/uploadController');
let express = require('express');
let multer  = require('multer');
const fs = require('fs');
let router = express.Router();
let upload = multer({ storage : uploadController.storage });

router.post('/', upload.single('fileData'), uploadController.uploadImage);
router.post('/array', upload.array('arrfileData', 12), uploadController.uploadMultiImage);

module.exports = router;