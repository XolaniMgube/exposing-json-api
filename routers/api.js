const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja')

// get a list of ninjas from the databsae
router.get('/ninjas', (req, res, next) => {
    res.send({
        type: "GET"
    });
});

// add a new ninja to the database
router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body).then(function(ninja) {
        res.send(ninja) 
    }).catch(next)
});

// update a ninja in the database
router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
        Ninja.findOne({_id: req.params.id}).then(function(ninja) {
            res.send(ninja);
        }); 
    });
});

//delete a ninja from the database
router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja) {
        res.send(ninja)
    });
    res.send({
        type: "DELETE"
    });
});

module.exports = router;