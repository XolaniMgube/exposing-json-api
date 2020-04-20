const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//setup express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/visitors');
mongoose.Promise = global.Promise;

// body parser for json data
app.use(bodyParser.json())

// error handling middleware
app.use(function(err, req, res, next) {
    res.send({error: err.message})
})

// initialise routes
app.use('/api',routes);


// listen for request
app.listen(process.env.port || 4000, () => {
    console.log("Listening on port 4000");
});

