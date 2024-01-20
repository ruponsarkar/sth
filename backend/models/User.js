const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type : Number
    },
    token: {
        type : String
    },
    password: {
        type : String
    },
    image: {
        type: String
    },
    status:{
        type:String
    }
}, {timestamps: true})

const User = mongoose.model('User', UserSchema)

module.exports = User;