let eventController = require('../controllers/eventController');

const express = require('express');

let router = express.Router();

router.post('/addOneEvent', eventController.addOneEvent);
router.get('/findAllEvent', eventController.findAllEvent);
router.get('/:eventId', eventController.findEventById);
router.get('/findByName/:eventName', eventController.findEventByName);
router.get('/findByDate/:startDate', eventController.findEventByDate);
router.post('/findByKeyValue', eventController.findByKeyValue);
router.put('/updateEvent', eventController.updateEvent);
router.delete('/:eventId', eventController.deleteEvent);
router.delete('/deleteAllEvent', eventController.deleteAllEvent);
router.get('/findByAdmin/:adminId', eventController.findEventByAdminId);

module.exports = router;