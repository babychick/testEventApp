let userController = require('../controllers/userController');

const express = require('express');

let router = express.Router();

router.post('/addOneUser', userController.addOneUser);
router.post('/addManyUsers', userController.addManyUsers);
router.get('/findAll', userController.findAll);
router.get('/:userName', userController.findByName);
router.delete('/:userID', userController.deleteUser);


module.exports = router;
