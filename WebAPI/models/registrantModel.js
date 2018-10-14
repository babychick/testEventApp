const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let registrantSchema = new Schema({

    adminID: {type: String, require: true},

    eventID: {type: String, require: true},

    userID: {type: String, require: true},

    status: {type: Boolean, require: true}
});

let registrant = mongoose.model('registrant', registrantSchema);

module.exports = registrant;
