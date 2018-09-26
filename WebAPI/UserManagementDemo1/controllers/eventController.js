let eventModel = require('../models/eventModel');
let baseController = require('./baseController');

// add an event
addOneEvent = (req, res) => {
    let obj = req.body;

    baseController.addOne(res, eventModel, obj);
}

// find all events
findAllEvent = (req, res) => {
    
    baseController.findAll(res, eventModel);
}

// find event by Id
findById = (req, res) => {
    let eventId = req.param.eventId;

    baseController.findById(res, eventModel, eventId);
}

// update event info
updateEvent = (req, res) => {
    let obj = req.body;

    baseController.updateOne(res, eventModel, obj);
}

// delete event
deleteEvent = (req, res) => {
    let eventId = req.param.eventId;

    baseController.deleteOne(res, eventModel, eventId);
}

module.exports = {
    addOneEvent,
    findAllEvent,
    findById,
    updateEvent,
    deleteEvent
}