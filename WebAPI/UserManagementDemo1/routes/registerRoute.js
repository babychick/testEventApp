let registerController = require('../controllers/registerController');

let express = require('express');

let router = express.Router();

router.post('/addOneRegister', registerController.addOneRegister);
router.post('/findByKeyValue', registerController.findByKeyValue);

module.exports = router;