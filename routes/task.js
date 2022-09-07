const express = require('express');
const router = express.Router();
const booking = require('../models/Booking');


router.post('/send-whatasapp-message', (req, res) => {
    booking.find({}, function(err, data) {
        if(!data) {
            res.status(200).json({'status': 'No Booking Found, Task Not Executed'});
        } else {
            res.status(200).json({'data': data})
        }
    })
})

module.exports = router;