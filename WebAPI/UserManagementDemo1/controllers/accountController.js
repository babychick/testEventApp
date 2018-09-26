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
    let email = req.params.email;
    console.log(email);

    accountModel.find({email: email}).limit(1)
        .then(data => {
            res.send(data);
            console.log(data);
        })
        .catch(err => {
            res.send("failed!");
            console.log("Error: " + err);
        });
}

module.exports = {
    addOneAccount,
    findAccountById,
    findAccountByEmail
}