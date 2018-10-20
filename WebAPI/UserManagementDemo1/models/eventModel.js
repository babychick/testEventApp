let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let eventSchema = new Schema({

    adminId: {type: String, require: true},

    eventName: {type: String, require: true},

    eventType: {type: String, require: true},

    location: {type: String, require: true},

    locationX: {type: String, require: true},

    locationY: {type: String, require: true},

    startDate: {type: Date, require: Date.now},
    
    endDate: {type: Date, require: Date.now},

    startTime: {type: String, require: true},

    endTime: {type: String, require: true},

    member: {type: Number, require: true},

    description: {type: String, default: ""},

    linkImage: {type: String},
});

let event = mongoose.model('event', eventSchema);

module.exports = event;
