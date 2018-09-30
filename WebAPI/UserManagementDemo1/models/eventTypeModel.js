const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let eventTypeSchema = new Schema({

    eventCode: {type: Number, require: true},
    
    eventTypeName: {type: String, require: true}
});

let eventType = mongoose.model('eventType', eventTypeSchema);

module.exports = eventType;