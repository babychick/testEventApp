let registrantModel = require('../models/registrantModel');
let attendeeModel = require('../models/attendeeModel');
let baseController = require('./baseController');

// ADD REGISTRANT
addOneRegistrant = (req, res) => {
    let obj = req.body;

    baseController.addOne(res, registrantModel, obj);
}

// FIND ALL REGISTRANT
findAllRegistrant = (req, res) => {
    let obj = { 
            eventId: req.body.eventId,
            adminId: req.body.adminId };

    baseController.findByKeyValue(res, registrantModel, obj);
}

// FIND ALL EVENT
findAllEvent = (req, res) => {
    let obj = { userId: req.params.userId };
    
    baseController.findByKeyValue(res, registrantModel, obj);
}

findByDate = (req, res) => {
    let obj = { startDate: req.body.startDate };

    baseController.findByKeyValue(res, registrantModel, obj);
}

// UPDATE STATUS OF REGISTRANT
updateStatus = (req, res) => {
    let obj = req.body;

    baseController.updateOne(res, registrantModel, obj);

    if (obj.status === 'Chấp nhận') {
        let obj_1 = {
            adminId: obj.adminId,
            adminName: obj.adminName,
            eventId: obj.eventId,
            eventName: obj.eventName,
            userId: obj.userId,
            userName: obj.userName,
            status: 'Chưa điểm danh'
        }

        baseController.addOne(res, attendeeModel, obj_1);
    }
}

// DELETE REGISTRANT
deleteOneRegistrant = (res, req) => {
    let id = req.params.id;

    baseController.deleteOne(res, registrantModel, id);
}

module.exports = {
    addOneRegistrant,
    findAllRegistrant,
    findAllEvent,
    findByDate,
    updateStatus,
    deleteOneRegistrant
}