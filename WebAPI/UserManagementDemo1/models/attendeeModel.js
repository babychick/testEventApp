const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let attendeeSchema = new Schema({

    adminId: {type: String, require: true},
    
    adminName: {type: String, require: true},

    eventID: {type: String, require: true},

    eventName: {type: String, require: true},
    
    userID: {type: String, require: true},

    userName: {type: String, require: true},

    status: {type: String, require: true}
});

let attendee = mongoose.model('attendee', attendeeSchema);

module.exports = attendee;