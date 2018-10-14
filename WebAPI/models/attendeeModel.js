const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let attendeeSchema = new Schema({

    adminID: {type: String, require: true},

    eventID: {type: String, require: true},

    userID: {type: String, require: true},

    status: {type: Boolean, require: true}
});

let attendee = mongoose.model('attendee', attendeeSchema);

module.exports = attendee;