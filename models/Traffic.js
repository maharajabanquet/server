const mongoose = require('mongoose');

const TrafficSchema = mongoose.Schema({
    IPv4: {
        type: String,
    },
    city: {
        type: String,
    },
    country_code: {
        type: String,
    },
    country_name: {
        type: String,
    },
    
    postal: {
        type: String,
    },
    state: {
        type: String,
    },
})

module.exports = mongoose.model('traffic', TrafficSchema)