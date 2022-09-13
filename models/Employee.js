const mongoose = require('mongoose');



const EmployeeSchema = mongoose.Schema({
    employeeName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true
    },
    reportManager: {
        type: String,
        required: true
    },
    status: {
        type: String,
        value: 'in-active'
    },
    employmentStartDate: {
        type: Date,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }

})
// EmployeeSchema.plugin(autoIncrement.plugin, 'employee');
module.exports = mongoose.model('employee', EmployeeSchema);
