let eventController = require('../controllers/eventController');

const express = require('express');

let router = express.Router();

router.post('/addOneEvent', eventController.addOneEvent);
router.get('/findAllEvent', eventController.findAllEvent);
router.get('/:eventId', eventController.findById);
router.put('/updateEvent', eventController.updateEvent);
router.delete('/:eventId', eventController.deleteEvent);

module.exports = router;
