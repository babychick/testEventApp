const accountModel = require('../models/accountModel');

// add new account
addNewAccount = (req, res) => {
    let account = {
        email,
        password,
        addInfo
    } = req.body;

    accountModel.create(account, (err, data) => {
        if (err) {
            res.send();
            console.log("[" + err.magenta + "]");
        } else {
            res.send(data);
            console.log("Account " + email.brown + " is added!");
        }
    });
}
