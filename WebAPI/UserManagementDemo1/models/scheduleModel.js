const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let scheduleSchema = new Schema({

    eventID: {type: String, require: true},

    dateStart: {type: Date, require: true},

    dataEnd: {type: Date, require: true},

    timeStart: {type: String, require: true},

    timeEnd: {type: String, require: true}
});

let schedule = mongoose.model('schedule', scheduleSchema);

module.exports = schedule;