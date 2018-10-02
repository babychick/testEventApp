const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let attendeeSchema = new Schema({

    userID: {type: String, require: true},

    eventID: {type: String, require: true},

    adminID: {type: String, require: true},

    note: {type: String}
});

let attendee = mongoose.model('attendee', attendeeSchema);

module.exports = attendee;