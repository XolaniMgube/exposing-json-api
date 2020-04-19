const express = require('express');
const routes = require('./routers/api');
const bodyParser = require('body-parser');


//setup express app
const app = express();

// body parser for json data
app.use(bodyParser.json())

// initialise routes
app.use('/api',routes);


// listen for request
app.listen(process.env.port || 4000, () => {
    console.log("Listening on port 4000");
});

