let eventController = require('../controllers/eventController');

let express = require('express');

let router = express.Router();

router.post('/addOneEvent', eventController.addOneEvent);
router.get('/findAllEvent', eventController.findAllEvent);
router.get('/:eventId', eventController.findEventById);
router.put('/updateEvent', eventController.updateEvent);
router.delete('/:eventId', eventController.deleteEvent);
router.post('/findByKeyValue', eventController.findByKeyValue);

module.exports = router;