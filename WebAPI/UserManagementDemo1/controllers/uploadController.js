const fs = require('fs');
let multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'uploads/');
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    }
  });

uploadImage = (req, res) => {
    fs.readFile(req.file.path, (err, contents) => {
        if (err) {
            console.log('Error: ' + err);
        } else {
            let filename = req.file.originalname;
            console.log(JSON.stringify({filename: filename}));
            res.send(JSON.stringify({filename: filename}))
        }
    })
}

uploadMultiImage = (req, res) => {
    fs.readFile(req.files, (err, contents) => {
        if (err) {
            console.log('Error: ', err);
        } else {

        }
    })
}

module.exports = {
    uploadImage,
    uploadMultiImage,
    storage
}