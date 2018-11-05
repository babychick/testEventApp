let registrantController = require('../controllers/registrantController');
let express = require('express');
let router = express.Router();

router.post('/addOneRegistrant', registrantController.addOneRegistrant);
router.post('/findAllRegistrant', registrantController.findAllRegistrant);
router.post('/findByDate', registrantController.findByDate);
router.get('/:userId', registrantController.findAllEvent);
router.put('/updateStatus', registrantController.updateStatus);
router.delete('/:id', registrantController.deleteOneRegistrant);

module.exports = router;