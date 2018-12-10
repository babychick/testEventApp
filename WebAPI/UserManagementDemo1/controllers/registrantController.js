let registrantModel = require('../models/registrantModel');
let attendeeModel = require('../models/attendeeModel');
let baseController = require('./baseController');
let userModel = require('../models/userModel');
let accountModel = require('../models/accountModel');
let sendEmailController = require('./sendEmailController');
// ADD REGISTRANT
addOneRegistrant = (req, res) => {
    let obj = req.body;

    baseController.addOne(res, registrantModel, obj);
}

// FIND ALL REGISTRANT
findAllRegistrant = (req, res) => {
    let obj = { 
            eventId: req.body.eventId,
            adminId: req.body.adminId,
            status: req.body.status };

    baseController.findByKeyValue(res, registrantModel, obj);
}

// FIND ALL EVENT
findAllEvent = (req, res) => {
    let obj = { userId: req.params.userId };
    
    baseController.findByKeyValue(res, registrantModel, obj);
}

findByDate = (req, res) => {
    let obj = req.body;

    baseController.findByKeyValue(res, registrantModel, obj);
}

// find key-value
findByKeyValue = (req, res) => {
  let obj = req.body;

  baseController.findByKeyValue(res, registrantModel, obj);
}

// UPDATE STATUS OF REGISTRANT
updateStatus = (req, res) => {
    let obj = req.body;

    baseController.updateOne(res, registrantModel,  obj);

    if (obj.status === 'Chấp nhận') {
        let obj_1 = {
            adminId: obj.adminId,
            adminName: obj.adminName,
            eventId: obj.eventId,
            eventName: obj.eventName,
            userId: obj.userId,
            userName: obj.userName,
            status: 'Chưa điểm danh'
        }

        baseController.addOne(res, attendeeModel, obj_1);
        //  console.log('obj '+JSON.stringify(obj_1))
        // var obj_2 = {
        //     nameEvent: obj_1.eventName,
        //     yourEmail: obj.email,
        //     name: obj.userName,
        //     address: obj.location,
        //     status: obj.status
        // };
        // res.setHeader('Content-Type', 'text/plain');
            
        // sendEmailController.pheDuyet(res, obj_2);
    }
}

// DELETE REGISTRANT
deleteOneRegistrant = (req, res) => {
    let id = req.body.id;
    let userId = req.body.userId;
    let startDate = req.body.startDate;
    let check = false;
    console.log(id + '-' + userId + '-' + startDate)
    // baseController.deleteOne(res, registrantModel, id);
    registrantModel.deleteOne({_id: id})
    .then(() => {
        registrantModel.find({
            userId: userId,
            startDate: startDate
        })
        .then(data => {
            res.send({
                title: 'ok',
                data: data
            });
            console.log(data)
        })

    })
    .catch(err => {
     res.send({
            title: 'err'
        });
        check = false;
    });
}

module.exports = {
    addOneRegistrant,
    findAllRegistrant,
    findAllEvent,
    findByDate,
    updateStatus,
    deleteOneRegistrant,
    findByKeyValue
}