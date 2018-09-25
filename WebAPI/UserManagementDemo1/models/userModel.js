const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: {type: String, require: true},

    birthday: {type: Date, require: true},

    job: {type: String},

    address: {type: String},

    isBanned: {type: Boolean},

    rateStar: {type: Number, max: 5},
});

const user = mongoose.model('user', userSchema);

module.exports = user;
