var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var suggestions = new Schema({
    date:Date,
    message:String
});

module.exports = suggestions;