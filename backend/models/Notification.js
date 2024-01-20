const mongoose = require('mongoose');
const Schema = mongoose.Schema

const NotificationSchema = new Schema({
    requested_by: {
        type: String
    },
    type: {
        type: String
    },
    notification: {
        type: String
    },
    approval_limit: {
        type : Number
    },
    status: {
        type: String
    }
}, {timestamps: true})

const Notification = mongoose.model('Notification', NotificationSchema)

module.exports = Notification;