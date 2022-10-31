const express = require('express');
const department = require('../models/Department');

const router = express.Router();


router.post('/add-department', (req, res) => {
    const body = req && req.body;
    const depart = new department(body)
    depart.save(depart);
    res.status(200).json({'status': 'Added'});
   
})

router.get('/get-department', (req, res) => {
   
  department.find({}, function(err, result) {
    if(err) {
    res.status(503).json({'error': 'Internal Server'});

    }
    if(result) {
        res.status(200).json({'department': result});

    }
  })
})

module.exports = router;