const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    accountId: {type: String, require: true},

    name: {type: String, require: true},

    birthday: {type: Date, require: true},

    job: {type: String},
    
    gender: {type: String},

    phone: {type: String},

    address: {type: String},

    isBanned: {type: Boolean},

    nation: {type: String},

    rateStar: {type: Number, max: 5},

    linkImage: {type: String}
});

const user = mongoose.model('user', userSchema);

module.exports = user;
