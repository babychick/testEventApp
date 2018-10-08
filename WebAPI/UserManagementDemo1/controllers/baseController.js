// add one user
addOne = (res, model, object) => {

  model.create(object)
    .then(data => {
        // res.send(data);
        // console.log("done");
        res.send({
            title: 'ok',
            result: data
        })
    })
    .catch(err => {
        // res.send("Failed to create an user!");
        // console.log("Error: " + err);
        res.send({
            title: 'err',
            result: null
        })
    });
}

// find all user
findAll = (res, model) => {

  model.find()
    .then(data => {
        res.send(data);
        console.log(data);
    })
    .catch(err => {
      res.send("failed!");
      console.log("Error: " + err);
    });
}

// find by id
findById = (res, model, id) => {

  model.findById(id)
    .then(data => {
        res.send(data);
        console.log(data);
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
            console.log(data);
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
        // res.send(data);
        // console.log(data);
        res.send({
            title: 'ok',
            result: data
        })
    })
    .catch(err => {
        // res.send("failed!");
        // console.log("Error: " + err);
        res.send({
            title: 'err',
            result: null
        })
    });
}

//delete a user
deleteOne = (res, model, id) => {

  model.deleteOne({_id:id})
    .then(data => {
      res.send("User " + id + " is deleted.");
      console.log(id + " is deleted.");
    })
    .catch(err => {
      res.send("failed");
      console.log("Error: " + err);
    });
}

module.exports = {
  addOne,
  findAll,
  findById,
  updateOne,
  deleteOne,
  findByKeyValue
}
