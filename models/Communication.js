const mongoose = require('mongoose');


const CommunicationSchema = mongoose.Schema({
    status: {
        type: Boolean
    },
    name: {
        type: String
    },
    updated: {
        type: Date,
        default: new Date()
    }
    
})

module.exports = mongoose.model('communication', CommunicationSchema);
