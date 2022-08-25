const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const LaganSchema = mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('lagan', LaganSchema)