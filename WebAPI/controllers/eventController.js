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
findEventById = (req, res) => {
    let eventId = req.params.eventId;

    baseController.findById(res, eventModel, eventId);
}

// find event by Name
findEventByName = (req, res) => {
    let obj = {
        eventName: req.params.eventName
    }

    baseController.findByKeyValue(res, eventModel, obj);
}

// update event info
updateEvent = (req, res) => {
    let obj = req.body;

    baseController.updateOne(res, eventModel, obj);
}

// delete event
deleteEvent = (req, res) => {
    let eventId = req.params.eventId;

    baseController.deleteOne(res, eventModel, eventId);
}

module.exports = {
    addOneEvent,
    findAllEvent,
    findEventById,
    findEventByName,
    updateEvent,
    deleteEvent
}