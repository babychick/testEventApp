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
    let queryString = {
        eventName: req.params.eventName
    }

    baseController.findByKeyValue(res, eventModel, queryString);
}
// find event by date
findEventByDate = (req, res) => {
    let queryString = {
        startDate: req.params.startDate
    }

    baseController.findByKeyValue(res, eventModel, queryString);
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

// delete all event
deleteAllEvent = (req, res) => {
    
    eventModel.remove({})
        .then(data => {
            res.send({
                title: 'ok',
                data: 'Deleted all.'
            });
        })
        .catch(err => {
            res.send({
                title: 'err',
                data: 'Deleting failed!s'
            });
        })
}

module.exports = {
    addOneEvent,
    findAllEvent,
    findEventById,
    findEventByName,
    findEventByDate,
    updateEvent,
    deleteEvent,
    deleteAllEvent
}