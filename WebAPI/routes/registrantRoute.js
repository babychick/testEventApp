let registrantController = require('../controllers/registrantController');
let express = require('express');
let router = express.Router();

router.post('/addOneRegistrant', registrantController.addOneRegistrant);
router.post('/findEvent', registrantController.findAllEvent);
router.post('/findRegistrant', registrantController.findAllRegistrant);
router.put('/updateStatus', registrantController.updateStatus);
router.delete('/:id', registrantController.deleteOneRegistrant);

module.exports = router;