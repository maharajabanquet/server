const express = require('express');
const { Router } = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

router.post('/add-booking', (req, res) => {
    const add_booking = new Booking(req.body);
    add_booking.save(req.body).then(data => {
        res.status(200).json({'success': data});
    }).catch(err => {
        console.log(err);
        
        res.status(503).json({'error': 'Internal Server Error'})
    })
})

router.get('/get-booking-list', (req, res) => {
    let projection = {}
    let query = {}
    if(req.query.bookingDate) {
        projection = {'bookingDate': 1, 'status': 1, 'invoice_generated': 1};
    }
    if(req && req.query && req.query.bookingDateQuery) {
        query = {bookingDate: req.query.bookingDateQuery}
    }
    if(req && req.query && req.query.status) {
        query = {status: req.query.status}
    }
    Booking.find(query, projection).then(data => {
        res.status(200).json({'bookingData': data});
    }, (err) => {
        console.log(err);
        
        res.status(503).json({'error': "Internal Server Error"});
    })

})

router.get('/get-booking-admin', (req, res) => {
    Booking.paginate({}, {page: Number(req.query.pageNo), limit: Number(req.query.pageSize), sort:     { timestamp: -1 }}, function(err, result){
        res.status(200).json({'success': result});
    })
})

router.get('/remove-booking', (req, res) => {

})

router.get('/confirm-booking', (req, res) => {
    Booking.update({_id: req.query.id}, {$set: {status: req.query.status}}, function(err, result) {
        res.status(200).json({'status': 'success'});
        console.log(result);
    })
})

module.exports = router