const mongoose = require('mongoose');

const ReceivingSchema = mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    securityDeposit: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('receiving', ReceivingSchema)