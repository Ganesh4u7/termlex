var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var wholesalePurchaseSchema = new Schema({

    name: String,
    cost: Number,
    amount: Number

});

module.exports = wholesalePurchaseSchema;