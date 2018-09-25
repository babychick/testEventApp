const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    
    email: {type: String, require: true},
    
    password: {type: String, require: true},
    
    addInfo: {type: Boolean, default: false}
});

const account = mongoose.model('account', accountSchema);

module.exports = account;