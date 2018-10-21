let accountModel = require('../models/accountModel');
let baseController = require('./baseController');

// add an account
addOneAccount = (req, res) => {
    let obj = req.body;

    baseController.addOne(res, accountModel, obj);
}

// find account by id
findAccountById = (req, res) => {
    let accountId = req.params.accountId;
  
    baseController.findById(res, accountModel, accountId);
  }

// find account by email
findAccountByEmail = (req, res) => {

    let obj = {email: req.params.email};

    baseController.findByKeyValue(res, accountModel, obj);
}

// update user info
updateAccount = (req, res) => {
  let obj = req.body;

  baseController.updateOne(res, accountModel, obj);
}

module.exports = {
    addOneAccount,
    findAccountById,
    findAccountByEmail,
    updateAccount
}