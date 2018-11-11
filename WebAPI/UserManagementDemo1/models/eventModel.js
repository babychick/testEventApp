let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let eventSchema = new Schema({

    adminId: {type: String, require: true},

    adminName: {type: String, require: true},

    eventName: {type: String, require: true},

    eventType: {type: String, require: true},

    location: {type: String, require: true},

    locationX: {type: String, require: true},

    locationY: {type: String, require: true},

    startDate: {type: String, require: true},
    
    endDate: {type: String, require: true},

    startTime: {type: String, require: true},

    endTime: {type: String, require: true},

    member: {type: Number, require: true},
    
    linkImage: {type: String},

    description: {type: String, default: "Chưa có mô tả"}
});

let event = mongoose.model('event', eventSchema);

module.exports = event;