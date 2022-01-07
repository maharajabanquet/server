const express = require('express');
const Enquiry = require('../models/Enquiry');

const router = express.Router();

router.post('/add-enquiry', (req, res) => {
   console.log(req.body);
   
   const add_enquiry = new Enquiry({
       "firstName": req.body.firstName,
       "lastName": req.body.lastName,
       "phoneNumber": req.body.phoneNumber,
       "address": req.body.address,
       "BookingDate": req.body.BookingDate
    });
   add_enquiry.save().then(data => {
       res.status(200).json({'success': data});
   })
   .catch(err => {
       res.status(503).json({'error': 'Internal Server Error'})
   })
})

router.get('/view-all-enquiry', (req, res) => {
    Enquiry.paginate({}, {page: Number(req.query.pageNo), limit: Number(req.query.pageSize), sort:     { timestamp: -1 }}, function(err, result){
        res.status(200).json({'success': result});
    })
})


module.exports = router;