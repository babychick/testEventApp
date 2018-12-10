const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let registrantSchema = new Schema({

    adminId: {type: String, require: true},

    adminName: {type: String, require: true},

    eventId: {type: String, require: true},

    eventName: {type: String, require: true},

    startDate: {type: String, require: true},

    startTime: {type: String, require: true},

    endDate: {type: String, require: true},

    endTime: {type: String, require: true},

    location: {type: String, require: true},

    userId: {type: String, require: true},

    userName: {type: String, require: true},

    email: {type: String, require: true},

    phone: {type: String, require: true},

    linkImage: {type: String, require: true},

    status: {type: String, default: 'Chưa duyệt'}
});

let registrant = mongoose.model('registrant', registrantSchema);

module.exports = registrant;