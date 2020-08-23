"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const Visitors = require('./queries')

const app = express();

let visitorTable = new Visitors();

app.post('/addNewVisitor', async(req, res) => {
    let addNew = await visitorTable.addVisitor(
        "Xolani",
        10,
        "10-10-2020",
        "20:20",
        "Njabulo",
        "comment"
    );
    res.send(addNew)
})

app.delete('/deleteVisitor/:id', async(req, res) => {
    let id = req.params.id
    let deleteVisitor = await visitorTable.deleteAVisitor(id)
    res.send(deleteVisitor)
})

app.delete('/deleteAllVisitors', async(req, res) => {
    let deleteAllVisitors = await visitorTable.deleteAllVisitors()
    res.send(deleteAllVisitors)
})

app.get('/viewVisitors', async(req, res) => {
    let viewVisitors = await visitorTable.viewTable()
    res.send(viewVisitors)
})

app.get('/viewVisitor/:id', async(req, res) => {
    let id = req.params.id 
    let viweSingleVisitor = await visitorTable.viewOneVisitor(id)
    res.send(viweSingleVisitor)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})




app.listen(4000, () => {
    console.log("listening on localhost:4000")
})

