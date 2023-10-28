const mongoose = require('mongoose');

const AttendanceSchema = mongoose.Schema({
    employeeName: {
        type: String,
        require: true,
    },
    absentDate: {
        type: String,
        require: true,
    },
    reason: {
        type: String,
        require: true,
    },
    typeColor: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('attendance', AttendanceSchema)