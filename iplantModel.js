const mongoose = require('mongoose');

const iplantSchema = mongoose.Schema({
    base64Image: {
        type: String,
        require: true,
    }
   
})

module.exports = mongoose.model('iplant', iplantSchema)