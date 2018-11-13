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
    let obj_1 = {
        eventId: obj.eventId,
        adminId: obj.adminId,
        userId: obj.userId
    }

    attendeeModel.find(obj_1)
    .then(data => {
        let obj_2 = {
            _id: data._id,
            status: obj.status
        }
            baseController.updateOne(req, attendeeModel, obj_2);
    })
    .catch(err => {
        res.send({
            title: 'err',
            data: err
        })
    })

}
module.exports = {
    addOneAttendee,
    findAttendees,
    findEventOfUser,
    updateUserStatus
}