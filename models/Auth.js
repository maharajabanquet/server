const mongoose = require('mongoose');


const AuthSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
})

module.exports = mongoose.model('auth', AuthSchema);
