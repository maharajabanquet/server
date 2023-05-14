const mongoose = require('mongoose');

const ServoceSchema = mongoose.Schema({
        id: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        discription: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        categoryList:{
            type: Array,
            required: true,
        },
})

module.exports = mongoose.model('service', ServoceSchema)