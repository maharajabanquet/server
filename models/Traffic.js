const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const TrafficSchema = mongoose.Schema({
    visitor_count: {
        type: Number,
    },
})

module.exports = mongoose.model('Enquiry', TrafficSchema)