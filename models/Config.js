const mongoose = require('mongoose');


const ConfigSchema = mongoose.Schema({
    finalBookingAmount: {
        type: Number
    },
    acMainHall: {
        type: Number
    },
    deluxRoom: {
        type: Number
    },
    miniAcHall: {
        type: Number
    },
    kitchen: {
        type: Number
    },
    firstFloor: {
        type: Number
    },
    dgWithDisel: {
        type: Boolean
    },
    engagement: {
        type: Number
    },
    securityDepositCharges: {
        type: Number,
    }
})

module.exports = mongoose.model('config', ConfigSchema);
