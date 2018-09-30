let registrantController = require('../controllers/registrantController');
let express = require('express');
let router = express.Router();

router.post('/addOneRegistrant', registrantController.addOneRegistrant);
router.get('/findEvent/:eventId', registrantController.findAllEvent);
router.get('/findUser/:userId', registrantController.findAllRegistrant);
router.put('/updateStatus', registrantController.updateStatus);
router.delete('/:id', registrantController.deleteOneRegistrant);

module.exports = router;