let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let registerSchema = new Schema({
    
    userId: {type: String, require: true},
    
    eventId: {type: String, require: true},
});

let register = mongoose.model('register', registerSchema);

module.exports = register;