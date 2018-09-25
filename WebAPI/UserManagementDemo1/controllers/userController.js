let userModel = require('../models/userModel');

// add one user
addOneUser = (req, res) => {
  let obj = {
    name,
    birthday,
    job,
    address,
    isBanned,
    rateStar,
    dateAdd
  } = req.body;

  userModel.create(obj, (err, data) => {
    if (err) {
      res.send();
      console.log("[" + err.magenta + "]");
    } else {
      res.send(data);
      console.log("user " + name.brown + " is added.");
    }
  });
}

// add many user
addManyUsers = (req, res) => {
  let usersArray = req.body;

  userModel.insertMany(usersArray)
    .then(data => {
      res.send(data),
      console.log("done")
    })
    .catch(err => {
      res.send("failed!"),
      console.log("Error: " + err)
    });
}

// find all user
findAll = (req, res) => {

  userModel.find({})
    .then(data => {
        res.send(data),
        console.log(data)
    })
    .catch(err => {
      res.send("failed!"),
      console.log("Error: " + err)
    });
}

// find by name
findByName = (req, res) => {
  let userName = req.params.userName;

  userModel.find({name:userName}).limit(1)
    .then(data => {
      if (data.toString()) {
    res.send(data);
    console.log(data);
      } else {
        res.send("record not found");
        console.log("failed");
      }
    })
    .catch(err => {
      res.send("failed!"),
      console.log("Error: " + err)
    });
}

// find by id
// findById = (req, res) => {
//   let userId = req.params.userId;

//   userModel.find({_id:userId}).limit(1)
//     .then(data => {

//     })
// }

// update user info
updateUser = (req, res) => {
  let obj = req.body;

  userModel.updateOne()
}

//delete a user
deleteUser = (req, res) => {
  let userID = req.params.userID;

  userModel.deleteOne({name:userID})
    .then(data => {
      res.send("User " + userID + " is deleted."),
      console.log(userID + " is deleted.");
    })
    .catch(err => {
      res.send("failed"),
      console.log("Error: " + err);
    });
}

module.exports = {
  addOneUser,
  addManyUsers,
  findAll,
  findByName,
  deleteUser
}
