let uploadController = require('../controllers/uploadController');
let express = require('express');
let multer  = require('multer');
const fs = require('fs');
let router = express.Router();
let upload = multer({ storage : uploadController.storage });

router.post('/avatar', upload.single('fileData'), uploadController.uploadImage);
router.post('/', upload.any(), (req, res) => {
    let imageArray = [];
    req.files.map((img, index) => {
        imageArray.push(img.originalname);
        console.log(img.size);
    })

    res.send(imageArray);
});

module.exports = router;