let accountController = require('../controllers/accountController');
let express = require('express');

let router = express.Router();

router.post('/addOneAcocunt', accountController.addOneAccount);
router.get('/:accountId', accountController.findAccountById);
router.get('/email/:email', accountController.findAccountByEmail);
router.put('/updateAccount', accountController.updateAccount);

module.exports = router;