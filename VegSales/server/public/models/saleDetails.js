var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var saleDetails = new Schema({

    name:String,
    sold:Number,
    left:Number,
    boughtPrice:Number,
    priceMade:Number
});

module.exports = saleDetails;