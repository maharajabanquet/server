const express = require('express');
const Hotel = require('../models/Hotel');
const router = express.Router();


router.post('/add-hotel-activities', (req, res) => {
    const addActivities = new Hotel(req.body);
    addActivities.save(req.body).then(data => {
        res.status(200).json({'success': data});
    }).catch(err => {
        console.log(err);
        res.status(503).json({'error': 'Internal Server Error'})
    })
})

router.get('/get-hotel-activities-list', (req, res) => {
   Hotel.find({}, function(err, result) {
    res.status(200).json({'activities': result});
   })
})


router.get('/delete-activities', (req, res) => {
    const contactNumber = req.query.contactNumber;
    console.log(contactNumber);
    Hotel.findOneAndRemove({contactNumber: contactNumber}, function(err, result) {
        res.status(200).json({'success': true});
    })
})
module.exports = router