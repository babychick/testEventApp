let userModel = require('../models/userModel');
let baseController = require('./baseController');

// add one user
addOneUser = (req, res) => {
    let obj = req.body;

    baseController.addOne(res, userModel, obj);
}

// find all user
findAllUser = (req, res) => {

    baseController.findAll(res, userModel);
}

// find by id
findById = (req, res) => {
  let userId = req.params.userId;

  baseController.findById(res, userModel, userId);
}

// update user info
updateUser = (req, res) => {
  let obj = req.body;

  baseController.updateOne(res, userModel, obj);
}

//delete a user
deleteUser = (req, res) => {
  let userId = req.params.userId;

  baseController.deleteOne(res, userModel, userId);
}

module.exports = {
    addOneUser,
    findAllUser,
    findById,
    updateUser,
    deleteUser
}
