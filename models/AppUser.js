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
    },
    isDj: {
        type: Boolean
    },
    djOrder: {
        type: Array
    },
    fcm_token: {
        type: String
    }

})

module.exports = mongoose.model('appuser', AppUserSchema);
