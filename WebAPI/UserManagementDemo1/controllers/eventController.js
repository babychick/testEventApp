let userModel = require('../models/userModel');

findAllUsers = (req, res) => {
  // query
  // callback
  userModel.find()
  .then(res => {
    res.json(res.user);
  })
  .catch(err => {
    console.log(err);
  })
}

module.exports = {
  findAllUsers
}
