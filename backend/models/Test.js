const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TestSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type : Number
    },
    image: {
        type: String
    }
}, {timestamps: true})

const Test = mongoose.model('Test', TestSchema)

module.exports = Test;