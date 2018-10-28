let registrantModel = require('../models/registrantModel');
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

// UPDATE STATUS OF REGISTRANT
updateStatus = (req, res) => {
    let obj = req.body;

    baseController.updateOne(res, registrantModel, obj);
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
    updateStatus,
    deleteOneRegistrant
}