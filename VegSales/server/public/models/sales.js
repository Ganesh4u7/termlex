var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var salesSchema = new Schema({

    street: String,
    locality: String,
    sale:[{
        vegetable: String,
        quantity: Number,
        amount: Number
    }]

});

module.exports = salesSchema;