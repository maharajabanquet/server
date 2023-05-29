const express = require('express');
const Service = require('../models/ServiceModel');
const serviceList = require('../models/serviceList');
const router = express.Router();


router.post('/add-service', (req, res) => {
    const addService = new Service(req.body);
    addService.save(req.body).then(data => {
        res.status(200).json({'success': data});
    }).catch(err => {
        console.log(err);
        res.status(503).json({'error': 'Internal Server Error'})
    })
})

router.get('/get-services', (req, res) => {
    Service.find({}, function(err, result) {
        res.status(200).json({'services': result});
       })
})

router.get('/service-list', (req, res) => {
    serviceList.find({}, (err, result) => {
        res.status(200).json(result);
    })
})


module.exports = router
