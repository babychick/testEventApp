let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let accountSchema = new Schema({
    
    email: {type: String, require: true},
    
    password: {type: String, require: true},
    
    addInfo: {type: Boolean, default: false}
});

let account = mongoose.model('account', accountSchema);

module.exports = account;