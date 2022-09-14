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
    Employee.paginate({}, {page: Number(req.query.pageNo), limit: Number(req.query.pageSize), sort:     { timestamp: -1 }}, function(err, result){
        res.status(200).json({'success': result});
    })
})

router.get('/add-task', (req, res) => {
    console.log(res);
    res.status(200).json({'success': true});

})
module.exports = router