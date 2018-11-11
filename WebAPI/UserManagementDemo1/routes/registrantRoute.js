let registrantController = require('../controllers/registrantController');
let express = require('express');
let router = express.Router();

router.post('/addOneRegistrant', registrantController.addOneRegistrant);
router.post('/findAllRegistrant', registrantController.findAllRegistrant);
router.post('/findByDate', registrantController.findByDate);
router.post('/findByKeyValue', registrantController.findByKeyValue);
router.get('/:userId', registrantController.findAllEvent);
router.put('/updateStatus', registrantController.updateStatus);
router.delete('/deleteOneRegistrant', registrantController.deleteOneRegistrant);

module.exports = router;