const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating visitors schema and model
const VisitorsSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    assistedBy: {
        type: String
    },
    comments: {
        type: String
    }

})

const Visitors = mongoose.model('visitors', VisitorsSchema);

module.exports = Visitors;