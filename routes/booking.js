const express = require('express');
const { Router } = require('express');
const Booking = require('../models/Booking');
const Config = require('../models/Config');
const FCM = require('fcm-node');
const token = require('../models/Tokens');
const router = express.Router();
const serverKey = process.env.SERVER_KEY //put your server key here

router.post('/add-booking', (req, res) => {
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


function sendPushNotifcation(ids, bookingDate) {
    const message = {
        registration_ids: ["elqigjqIR8qPpo6h-fv8Y_:APA91bFMBQ34hDWEAOOPDBAmT27e0L-c8XYsb0Ii-tiBU-_pHQw136A5XLJQoE3c1L6s2coJSnRDLaZv_UDdgL2FllGmnbnxxLjHJePbhdxZy-usRrs028XAja-a8So8qEavl2e5lieK"] ,  // array required
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
           console.log("FCM ERROR ", error);
        } else {
            console.log("Successfully sent with response: ", response);
        }
    })
}


router.post('/send-push',(req,res) => {
    
  
    
})


module.exports = router