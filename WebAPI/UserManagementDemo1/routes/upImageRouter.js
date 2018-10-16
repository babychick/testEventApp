var fs = require('fs');
var multer  = require('multer');
// var upload = multer({ dest: 'uploads/' });
let express = require('express');
let router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage})

router.post('/',upload.single('fileData'), (req, res,next) => {
  fs.readFile(req.file.path,(err, contents)=> {
   if (err) {
   console.log('Error: ', err);
    // res.send(err)
  }else{
   console.log('File contents ',req.file.filename);
    res.send({
        filename: req.file.filename
    })
  }
 });
});

router.post('/array', upload.array('arrfileData', 12), function (req, res, next) {
  fs.readFile(req.file,(err, contents)=> {
   if (err) {
   console.log('Error: ', err);
    // res.send(err)
  }else{
   console.log('File contents ',req.file.filename);
    res.send({
        filename: req.file.filename
    })
  }
 });
})

module.exports = router;