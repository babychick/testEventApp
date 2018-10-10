let scheduleModel = require('../models/scheduleModel');
let baseController = require('./baseController');

// ADD SCHEDULE
addOneSchedule = (req, res) => {
    let obj = req.body;

    baseController.addOne(res, scheduleModel, obj);
}

// FIND SCHEDULE
findEventSchedule = (req, res) => {
    let obj = { eventId: req.params.eventId };

    baseController.findByKeyValue(res, scheduleModel, obj);
}

// UPDATE SCHEDULE
updateEventSchedule = (req, res) => {
    let eventId = req.params.eventId;

    baseController.updateOne(res, scheduleModel, eventId);
}

// DELETE SCHEDULE
deleteEventSchedule = (req, res) => {
    let event = req.params.eventId;

    baseController.deleteOne(res, scheduleModel, eventId);
}

module.exports = {
    addOneSchedule,
    findEventSchedule,
    updateEventSchedule,
    deleteEventSchedule
}