let eventTypeModel = require('../models/eventTypeModel');
let baseController = require('./baseController');

// ADD EVENT TYPE
addOneType = (req, res) => {
    let obj = req.body;

    baseController.addOne(res, eventTypeModel, obj);
}

// FIND ALL EVENT_TYPE
findAllType = (req, res) => {

    baseController.findAll(res, eventTypeModel);
}

// FIND EVENT_TYPE BY NAME
findTypeByName = (req, res) => {
    let queryString = {eventTypeName: req.params.eventTypeName};

    baseController.findByKeyValue(res, eventTypeModel, queryString);
}

module.exports = {
    addOneType,
    findAllType,
    findTypeByName
}