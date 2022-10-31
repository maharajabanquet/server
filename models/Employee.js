const mongoose = require('mongoose');



const EmployeeSchema = mongoose.Schema({
    employeeName: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    proof: {
        type: String,
        required: true
    },
    joiningDate: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now,
    }

})
// EmployeeSchema.plugin(autoIncrement.plugin, 'employee');
module.exports = mongoose.model('employee', EmployeeSchema);
