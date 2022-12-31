
const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    idProof: {
        type: String,
    },
    amountPaid: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },

})
// EmployeeSchema.plugin(autoIncrement.plugin, 'employee');
module.exports = mongoose.model('hotel', HotelSchema);
