let registerModel = require('../models/registerModel');
let baseController = require('./baseController');

// add an event
addOneRegister = (req, res) => {
    let obj = req.body;

    baseController.addOne(res, registerModel, obj);
}

// find key-value
findByKeyValue = (req, res) => {
  let obj = req.body;

  baseController.findByKeyValue(res, registerModel, obj);
}

module.exports = {
    addOneRegister,
    findByKeyValue
}