var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var salesSchema = require('../public/models/sales');
var sales = mongoose.model('sales',salesSchema);

var salesAnalysisSchema = require('../public/models/salesAnalysis');
var salesAnalysis = mongoose.model('salesAnalysis',salesAnalysisSchema);



var wholesalePurchaseSchema = require('../public/models/wholesalepurchase');
var wholesalePurchase = mongoose.model('wholesalePurchase',wholesalePurchaseSchema);

var saleDetailsSchema = require('../public/models/saleDetails');
var saleDetails = mongoose.model('saleDetails',saleDetailsSchema);

var suggestionsSchema = require('../public/models/suggestions');
var suggestions = mongoose.model('suggestions',suggestionsSchema);


router.post('/wholesale',function (req,res) {

    wholesalePurchase.create(req.body,function (err,data) {
        if(err){
            console.log(err);
        }
        else {
            console.log(data);
            res.send('Created');
        }
    })

});
router.post('/wholesaleEdit',function (req,res) {
    const filter = { name: req.body.name };

    wholesalePurchase.findOneAndUpdate(filter,req.body,function (err,data) {
        if(err){
            console.log(err);
        }
        else {
            console.log(data)
            res.send("Updated");
        }
    });
});

router.post('/wholesaleDelete',function (req,res) {
    const filter = { name: req.body.name };

    wholesalePurchase.findOneAndRemove(filter,function (err,data) {
        if(err){
            console.log(err);
        }
        else {
            console.log(data)
            res.send("Deleted");
        }
    });
});

router.post('/saveSales',function (req,res) {

    sales.create({street: req.body.street, locality: req.body.locality, sale:req.body.sale},function (err,data) {

        if(err){
            console.log(err);
        }
        else {
            console.log(data);
            res.send("added");
        }
    });

});

router.post('/saveSalesAnalysis',function (req,res) {

    salesAnalysis.create(req.body,function (err,data) {

        if(err){
            console.log(err);
        }
        else {
            console.log(data)
            res.send("added");
        }
    });

});


router.post('/saveSaleDetails',function (req,res) {

    saleDetails.create(req.body,function (err,data) {

        if(err){
            console.log(err);
        }
        else {
            console.log(data)
            res.send("added");
        }
    });

});

router.post('/editSaleDetails',function (req,res) {
    const filter = { name: req.body.name };
    saleDetails.findOneAndUpdate(filter,req.body,function (err,data) {
        if(err){
            console.log(err);
        }
        else {
            console.log(data)
            res.send("Updated");
        }
    });

});

router.post('/deleteSaleDetails',function (req,res) {
    const filter = { name: req.body.name };
    saleDetails.findOneAndRemove(filter,function (err,data) {
        if(err){
            console.log(err);
        }
        else {
            console.log(data)
            res.send("Deleted");
        }
    });

});

router.get('/getWholesaleData',function (req,res) {
    wholesalePurchase.find(function (err,data) {
        if(err){
            console.log(err);
        }
        else {
            console.log(data);
            res.send(data);
        }

    });
});
router.get('/getSales',function (req,res) {
    sales.find(function (err,data) {
        if(err){
            console.log(err);
        }
        else {
            console.log(data);
            res.send(data);
        }

    });
});
router.get('/getSalesAnalysis',function (req,res) {
    salesAnalysis.find(function (err,data) {
        if(err){
            console.log(err);
        }
        else {
            console.log(data);
            res.send(data);
        }

    });
});

router.get('/getSalesDetails',function (req,res) {
    saleDetails.find(function (err,data) {
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