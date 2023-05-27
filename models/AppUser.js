const mongoose = require('mongoose');


const AppUserSchema = mongoose.Schema({
    id: {
        type: {
            String
        }
    },
    mobile: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    dateOfBooking: {
        type: String
    },
    payment: {
        type: Number
    },
    cart: {
        type: Array
    },
    notification: {
        type: String
    },
    isAdmin: {
        type: Boolean
    }

})

module.exports = mongoose.model('appuser', AppUserSchema);
