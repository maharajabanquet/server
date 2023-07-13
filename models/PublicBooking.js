const mongoose = require('mongoose');


const PublicBooking = mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    requirement: {
        type: String,
        required: true
    },
    bookingDate: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
})

module.exports = mongoose.model('publicBooking', PublicBooking);
