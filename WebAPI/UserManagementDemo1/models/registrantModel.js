const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let registrantSchema = new Schema({

    adminId: {type: String, require: true},

    adminName: {type: String, require: true},

    eventId: {type: String, require: true},

    userId: {type: String, require: true},

    userName: {type: String, require: true},

    email: {type: String, require: true},

    phone: {type: String, require: true},

    linkImage: {type: String, require: true},

    status: {type: Boolean, require: true}
});

let registrant = mongoose.model('registrant', registrantSchema);

module.exports = registrant;