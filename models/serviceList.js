const mongoose = require('mongoose');

const serviceList = mongoose.Schema({
        itemName: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
        },
        image: {
            type: String
        }
       
})

module.exports = mongoose.model('serviceList', serviceList)