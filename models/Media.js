const mongoose = require('mongoose');


const MediaSchema = mongoose.Schema({
    type: {
        type: String
    },
    mediaSource: {
        type: String
    }
})

module.exports = mongoose.model('media', MediaSchema);
