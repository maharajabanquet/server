const mongoose = require('mongoose');


const DebtSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    payment_history: [],
    balance:{
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('debt', DebtSchema)
