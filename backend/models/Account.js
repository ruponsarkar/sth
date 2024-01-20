const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AccountSchema = new Schema({
    u_id: {
        type: String
    },
    amount: {
        type: Number
    },
    due_date: {
        type : String
    },
    payment_date: {
        type: String
    },
    status: {
        type: String
    }
}, {timestamps: true})

const Account = mongoose.model('Account', AccountSchema)

module.exports = Account;