const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const BookingSchema = mongoose.Schema({
    bookingDate: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    requirements: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    BookingAmount: {
        type: Number,
        required: true,
    },
    finalAmount: {
        type: Number,
        required: true
    },
    balancedAmount: {
        type: Number, 
        required: true
    },
    facilities: {
        type: [],
        required: true
    },
    status: {
        type: String,
        required: true
    },
    invoice_generated: {
        type: Boolean,
        default: false,
    },
    invoice_number: {
        type: String
    },
    settled: {
        type: Boolean,
        default: false
    }
})
BookingSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Booking', BookingSchema)