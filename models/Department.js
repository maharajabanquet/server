const mongoose = require('mongoose');


const DepartmentSchema = mongoose.Schema({
    departmentName: {
        type: String, 
    },
    departmentId: {
        type: String
    },
})

module.exports = mongoose.model('department', DepartmentSchema);
