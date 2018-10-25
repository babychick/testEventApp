let userController = require('../controllers/userController');
let express = require('express');

let router = express.Router();

router.post('/addOneUser', userController.addOneUser);
router.post('/findUserByAccountId', userController.findUserByAccountId);
router.get('/findAllUser', userController.findAllUser);
router.get('/:userId', userController.findUserById);
router.put('/updateUser', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
