const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    campus: {
        type: String,
        required: true

    },
    subscribeDate: {
        type: Date,
        default: Date.now,
        required: false
    }
}, {
    collection: 'subscribers'
})



const Subscribers = module.exports = mongoose.model('subscribers', subscriberSchema);