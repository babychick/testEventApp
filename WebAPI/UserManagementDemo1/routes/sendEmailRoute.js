let sendEmailController = require('../controllers/sendEmailController');
let express = require('express');

let router = express.Router();


router.post('/pheDuyet', sendEmailController.pheDuyet);

module.exports = router;