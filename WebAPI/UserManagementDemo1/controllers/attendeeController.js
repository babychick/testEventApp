let attendeeModel = require('../models/attendeeModel');
let baseController = require('./baseController');

// ADD ATTENDEE
addOneAttendee = (req, res) => {
    let obj = req.body;

    baseController.addOne(res, attendeeModel, obj);
}

// FIND ALL ATTENDEES BY ADMIN_ID & EVENT_ID
findAttendees = (req, res) => {
    let queryString = {adminId: req.body.adminId, eventId: req.body.eventId};

    baseController.findByKeyValue(res, attendeeModel, queryString);
}

// FIND EVENTS BY USER_ID
findEventOfUser = (req, res) => {
    let queryString = {userId: req.params.userId};

    baseController.findByKeyValue(res, attendeeModel, queryString);
}

updateUserStatus = (req, res) => {
    let obj = req.body;

    baseController.updateOne(req, attendeeModel, obj);
}
module.exports = {
    addOneAttendee,
    findAttendees,
    findEventOfUser,
    updateUserStatus
}