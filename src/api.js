const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

let visitorTable = require('./queries.js');

const urlencodedParser = bodyParser.urlencoded({extended: false})

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

router.post('/success',urlencodedParser, async(req, res) => {
    let visitorTable = new Visitors();
    let addNew = await visitorTable.addVisitor(
        // req.body.name,
        // req.body.age,
        // req.body.date,
        // req.body.time,
        // req.body.assistedby,
        // req.body.comments
        "Xolani",
        10,
        "10-10-2020",
        "20:20",
        "Njabulo",
        "comment"
    );
    res.send(addNew)
})

module.exports = router;