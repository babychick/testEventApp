const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    accountId: {type: String, require: true},

    name: {type: String},

    birthday: {type: Date},

    job: {type: String},

    gender: {type: String},

    phone : {type: String},

    address: {type: String},

    isBanned: {type: Boolean},

    rateStar: {type: Number, max: 5},
    
    nation: {type: String},

    linkImage: {type: String},
});

const user = mongoose.model('user', userSchema);

module.exports = user;
