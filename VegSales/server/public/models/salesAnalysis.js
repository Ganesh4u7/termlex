var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var salesAnalysisSchema = new Schema({

    streetName: String,
    amount: Number,
    vegetable: String
});

module.exports = salesAnalysisSchema;