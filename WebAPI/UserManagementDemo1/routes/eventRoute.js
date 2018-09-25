let eventController = require('../controllers/eventController');

const express = require('express');

let router = express.Router();

//router.get('/', eventController.functionName)

//module.exports
router.get('/', eventController.findAllUsers);

module.exports = router;
