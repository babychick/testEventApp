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
            err
        });
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

//delete
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

deleteAll = (res, model) => {

    model.remove({})
        .then(data => {
            res.send({
                title: 'ok',
                data: 'Deleted all.'
            });
        })
        .catch(err => {
            res.send({
                title: 'err',
                data: 'Deleting failed!s'
            });
        })
}

module.exports = {
  addOne,
  findAll,
  findById,
  findByKeyValue,
  updateOne,
  deleteOne,
  deleteAll
}
