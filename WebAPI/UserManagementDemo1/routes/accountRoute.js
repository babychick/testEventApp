let accountController = require('../controllers/accountController');
let express = require('express');

let router = express.Router();

router.post('/addOneAccount', accountController.addOneAccount);
router.get('/:accountId', accountController.findAccountById);
router.get('/email/:email', accountController.findAccountByEmail);

module.exports = router;