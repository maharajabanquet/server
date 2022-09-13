
const express = require('express');
const { Router } = require('express');
const Booking = require('../models/Booking');
const Config = require('../models/Config');
const FCM = require('fcm-node');
const token = require('../models/Tokens');
const { ObjectId } = require('mongodb');
const router = express.Router();
var moment = require('moment'); // require

const serverKey = "AAAA3TusO0M:APA91bFx9h7VwDVnRJiqmEVYLinnpVbkvQxCV-EgSyyugYnQtW9Mq1j_Z7GgtKiZWmu7_mcTcclTIZ2H4NvXqUI06wsJcJSCGa7OEaoYk4Ia5j1c9-rlkBUBrn7MgEyctNhiRtRotu_I"//put your server key here
console.log(typeof(serverKey));

router.post('/add-booking', (req, res) => {
    
    var reminderDate = moment(new Date(req.body.bookingDate));
    reminderDate = reminderDate.subtract(14, "days");
    reminderDate = reminderDate.format();
    req.body['reminder_date'] = reminderDate;
    // add cancel date
    var cancelDate = moment(new Date(req.body.bookingDate));
    cancelDate = cancelDate.subtract(10, "days");
    cancelDate = cancelDate.format();
    req.body['cancel_date'] = cancelDate;
    const add_booking = new Booking(req.body);
    add_booking.save(req.body).then(data => {
        Config.updateOne({$set: {finalBookingAmount: 150000}}, function(err, success) {
            token.find({}, function(err, success) {
                if(success && success.length > 0) {
                    sendPushNotifcation(success, req.body)
                } 
            } )
            res.status(200).json({'success': data});
        })
    }).catch(err => {
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
    Booking.find({}, function(err, result){
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


function sendPushNotifcation(ids, bookingDate) {
    let token_list = []
    console.log();
    ids.forEach(element => {
        token_list.push(element.fcm_token)
    });
    console.log(token_list);
    const message = {
        registration_ids: token_list ,  // array required
        notification: {
            title: `Booking for ${new Date(bookingDate.bookingDate).toLocaleDateString()}` ,
            body: `please tap to confirm`,
            sound:  "default",
            icon: "ic_launcher",
            badge: "1",
            click_action: 'FCM_PLUGIN_ACTIVITY',
            image: 'https://res.cloudinary.com/maharaja-banquet/image/upload/v1661863652/Maharaja-Banquet_SOCIAL-MEDIA_fnigtt.jpg'
        },
        priority: 'high',
        data: {
            action:"", // Action Type
            payload:"" // payload
        },
    }
    const fcm = new FCM(serverKey);
    fcm.send(message, (err, response) => {
        if (err) {
           console.log("FCM ERROR ", err);
        } else {
            console.log("Successfully sent with response: ", response);
        }
    })
}


router.post('/settle-booking',(req,res) => {
    const _id = new ObjectId(req.body._id);
    Booking.findById({_id: _id}, function(err, data) {
        console.log(data);
        if(!data) {
            res.status(404).json({"status": "Booking not found"});
            return;
        } else {
            const balancedAmount = 0;
            const BookingAmount = data.finalAmount;
            const settled = true;
            const query = {_id: _id};
            const toUpdate = {'BookingAmount': BookingAmount, 'balancedAmount': balancedAmount, 'settled': settled, 'invoice_generated': false}
            Booking.findByIdAndUpdate(query, {$set: toUpdate}, function(err, data) {
                if(err) {
                    res.status(503).json({"status": "Unable to settle account,please contact owner"}); 
                    return;
                }
                res.status(200).json({"status": 'ok'})
            })

        }
    })
})


module.exports = router