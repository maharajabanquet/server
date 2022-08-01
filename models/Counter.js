const mongoose = require('mongoose');


const CounterSchema = mongoose.Schema({
    index: {
        type: Number
    },
})

module.exports = mongoose.model('counter', CounterSchema);
