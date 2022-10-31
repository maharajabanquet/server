const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();


router.post('/add-employee', (req, res) => {
    const addEmployee = new Employee(req.body);
    addEmployee.save(req.body).then(data => {
        res.status(200).json({'success': data});
    }).catch(err => {
        console.log(err);
        
        res.status(503).json({'error': 'Internal Server Error'})
    })
})

router.get('/get-employee-list', (req, res) => {
   Employee.find({}, function(err, result) {
    res.status(200).json({'employeeList': result});
   })
})

router.get('/add-task', (req, res) => {
    console.log(res);
    res.status(200).json({'success': true});

})

router.get('/delete-employee', (req, res) => {
    const contact = req.query.contact;
    Employee.findOneAndRemove({contact: contact}, function(err, result) {
        res.status(200).json({'success': true});
    })
})
module.exports = router