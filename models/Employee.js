const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');



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
EmployeeSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('employee', EmployeeSchema);
