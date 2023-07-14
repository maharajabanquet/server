const mongoose = require('mongoose');


const NewsSchema = mongoose.Schema({
    fcm_token: {
        type: String
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('news-notifcation', NewsSchema);
