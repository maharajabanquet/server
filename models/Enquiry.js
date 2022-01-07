const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const EnquirySchema = mongoose.Schema({
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
    BookingDate: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})
EnquirySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Enquiry', EnquirySchema)