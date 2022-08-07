const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const TrafficSchema = mongoose.Schema({
    client_ip: {
        type: String,
    },
})

module.exports = mongoose.model('traffic', TrafficSchema)