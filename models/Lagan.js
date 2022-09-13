const mongoose = require('mongoose');

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