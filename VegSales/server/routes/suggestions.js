var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var suggestionsSchema = require('../public/models/suggestions');
var suggestions = mongoose.model('suggestions',suggestionsSchema);


router.post('/saveSuggestions',function (req,res) {

    suggestions.create(req.body,function (err,data) {

        if(err){
            console.log(err);
        }
        else {
            console.log(data)
            res.send("added");
        }
    });

});


router.get('/getSuggestions',function (req,res) {

    suggestions.find(function (err,data) {
        if(err){
            console.log(err);
        }
        else {
            console.log(data);
            res.send(data);
        }

    });

});
 module.exports = router;