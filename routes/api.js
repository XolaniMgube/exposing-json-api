const express = require('express');
const router = express.Router();
const VisitorModel = require('../models/visitors')


// add a new visitor
router.post('/addNewVisitor', (req, res, next) => {
    VisitorModel.create(req.body).then(function(visitors) {
        res.send(visitors);
    }).catch(next);
});


// delele a single visitor
router.delete('/deleteVisitor/:id', (req, res, next) => {
    VisitorModel.findByIdAndRemove({_id: req.params.id}).then((visitors) => {
        res.send(visitors);
    });
});


// delete all visitors
router.delete('/deleteAllVisitors', (req, res, next) => {
    VisitorModel.removeAll(req.body).then(function(visitors) {
        res.send(visitors);
    });
});


// viewing all visitors
router.get('/viewVisitors', (req, res) => {
    VisitorModel.find(req.body).then(function(visitors) {
        res.send(visitors);
    });
});


//viewing a single visitor
router.get('/viewVisitor/:id', (req, res, next) => {
    VisitorModel.findById({_id: req.params.id}).then((visitors) => {
        res.send(visitors);
    });
});


// update a single visitor
router.put('/updateVisitor/:id', (req, res, next) => {
    VisitorModel.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        VisitorModel.findOne({_id: req.params.id}).then((visitors) => {
            res.send(visitors);
        });
    });
});

module.exports = router;