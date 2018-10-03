let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let eventSchema = new Schema({

    adminId: {type: String, require: true},

    eventName: {type: String, require: true},

    eventType: {type: String, require: true},

    location: {type: String, require: true},

    date: {type: Date, require: Date.now},

    time: {type: String, require: true},

    member: {type: Number, require: true},

    status: {type: String, default: ""},

    description: {type: String, default: ""},

    linkImage: {type: String, require: true},
});

let event = mongoose.model('event', eventSchema);

module.exports = event;