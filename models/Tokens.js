const mongoose = require('mongoose');


const TokenSchema = mongoose.Schema({
    device_id: {
        type: String
    },
    fcm_token: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    }
   
})

module.exports = mongoose.model('token', TokenSchema);
