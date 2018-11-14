const mongoose = require('mongoose');

// add one user
addOne = (res, model, object) => {

  model.create(object)
    .then(data => {
        res.send({
            title: 'ok',
            data:data
        });
    })
    .catch(err => {
       res.send({
            title: 'err',
            data:null
        });
    });
}

// find all user
findAll = (res, model) => {

  model.find()
    .then(data => {
        res.send(data);
        // console.log(data);
    })
    .catch(err => {
      res.send("failed!");
      console.log("Error: " + err);
    });
}

// find by id
findById = (res, model, id) => {
    var ObjectId = require('mongoose').Types.ObjectId;
    var objId = new ObjectId( (id.length < 12) ? "123456789012" : id );
  model.findById(objId)
    .then(data => {
        res.send(data);
        // console.log(data);
    })
    .catch(err => {
      res.send("failed!");
      console.log("Error: " + err);
    });
}

// find by key-value
findByKeyValue = (res, model, object) => {

    model.find(object)
        .then(data => {
            res.send(data);
            // console.log(data);
        })
        .catch(err => {
            res.send("failed");
            console.log("Error: " + err);
        })
} 

// update user info
updateOne = (res, model, object) => {

  model.updateOne({_id:object._id}, object)
    .then(data => {
        res.send({
            title: 'ok',
            data:data
        });
    })
    .catch(err => {
        res.send({
            title: 'err',
            data:null
        });
    });
}

//delete a user
deleteOne = (res, model, id) => {

  model.deleteOne({_id:id})
    .then(data => {
      res.send({
            title: 'ok'
        });
    })
    .catch(err => {
     res.send({
            title: 'err'
        });
    });
}

module.exports = {
  addOne,
  findAll,
  findById,
  findByKeyValue,
  updateOne,
  deleteOne
}
