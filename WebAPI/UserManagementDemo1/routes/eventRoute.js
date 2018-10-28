let eventController = require('../controllers/eventController');

const express = require('express');

let router = express.Router();

router.post('/addOneEvent', eventController.addOneEvent);
router.post('/findByKeyValue', eventController.findByKeyValue);
router.get('/findAllEvent', eventController.findAllEvent);
router.get('/:eventId', eventController.findEventById);
router.get('/findByName/:eventName', eventController.findEventByName);
router.put('/updateEvent', eventController.updateEvent);
router.delete('/:eventId', eventController.deleteEvent);

module.exports = router;