const mongoose = require('mongoose');


const TaskSchema = mongoose.Schema({
    date: {
        type: String
    },
    title: {
        type: String
    },
    staffName: {
        type: String
    },
    images: {
        type: Array
    }
})

module.exports = mongoose.model('task', TaskSchema);
