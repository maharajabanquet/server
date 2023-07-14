
const express = require('express');
const { Router } = require('express');
const Booking = require('../models/Booking');
const Config = require('../models/Config');
const FCM = require('fcm-node');
const token = require('../models/Tokens');
const { ObjectId } = require('mongodb');
const router = express.Router();
var moment = require('moment'); // require
const schedule = require('../helpers/schedule');
const AppUser = require('../models/AppUser')
const serverKey = "AAAA3TusO0M:APA91bFx9h7VwDVnRJiqmEVYLinnpVbkvQxCV-EgSyyugYnQtW9Mq1j_Z7GgtKiZWmu7_mcTcclTIZ2H4NvXqUI06wsJcJSCGa7OEaoYk4Ia5j1c9-rlkBUBrn7MgEyctNhiRtRotu_I"//put your server key here


router.post('/add-booking', (req, res) => {
    
    var reminderDate = moment(new Date(req.body.bookingDate));
    reminderDate = reminderDate.subtract(14, "days");
    reminderDate = reminderDate.format();
    req.body['reminder_date'] = reminderDate;
    const assigedDj = req && req.body && req.body.assignedDj || ''
    // add cancel date
    var cancelDate = moment(new Date(req.body.bookingDate));
    cancelDate = cancelDate.subtract(10, "days");
    cancelDate = cancelDate.format();
    req.body['cancel_date'] = cancelDate;
    const add_booking = new Booking(req.body);
    // schedule(req.body['cancel_date'])
    // console.log(req.body['bookingDate']);
    // res.status(200).json({'success': true});
    add_booking.save(req.body).then(data => {
        Config.updateOne({$set: {finalBookingAmount: 151000}}, function(err, success) {
            token.find({}, function(err, success) {
                if(success && success.length > 0) {
                    for(let index=0; index<success.length; index++) {
                        if(success[index] && success[index].isAdmin) {
                            console.log("IS ADMIN ", success[index].isAdmin);
                            console.log("IS ADMIN ", success[index].phoneNumber);
                            sendPushNotifcation(success[index].fcm_token, req.body)
                        }
                        
                    }
                  
                } 
            } )
            if(assigedDj) {
                AppUser.findOne({mobile:assigedDj}, function(err, result) {
                    if(result) {
                        const fcm_token = result && result.fcm_token;
                        const djName = result && result.userName;
                        sendNotifcationToDj(fcm_token, req.body.bookingDate, djName)
                    }
                })
            }
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
    console.log(token_list);
    const message = {
        registration_ids: [ids] ,  // array required
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
            action:"admin", // Action Type
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

function sendNotifcationToDj(token, bookingDate, djName) {
   
    const message = {
        registration_ids: [token] ,  // array required
        notification: {
            title: `Hello ${djName}, Your Order Recieved for ${new Date(bookingDate).toLocaleDateString()}, Please accept.` ,
            body: `Tap To View Orders`,
            sound:  "default",
            icon: "ic_launcher",
            badge: "1",
            click_action: 'FCM_PLUGIN_ACTIVITY',
            image: 'http://www.maharajaraxaul.com/assets/images/main.jpeg'
        },
        priority: 'high',
        data: {
            action:"dj", // Action Type
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

function sendPushNotifcationDelete(ids, bookingDate) {
    let token_list = []
    ids.forEach(element => {
        token_list.push(element.fcm_token)
    });
    console.log(token_list);
    const message = {
        registration_ids: token_list ,  // array required
        notification: {
            title: `Booking Removed ${new Date(bookingDate).toLocaleDateString()}` ,
            body: `Booking has been removed from calendar`,
            sound:  "default",
            icon: "ic_launcher",
            badge: "1",
            click_action: 'FCM_PLUGIN_ACTIVITY',
            image: 'https://e7.pngegg.com/pngimages/223/552/png-clipart-delete-logo-button-icon-delete-button-love-image-file-formats.png'
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


function sendUpdateNotification(ids, bookingDate) {
    let token_list = []
    ids.forEach(element => {
        token_list.push(element.fcm_token)
    });
    console.log(token_list);
    const message = {
        registration_ids: token_list ,  // array required
        notification: {
            title: `Payment Updated for booking ${new Date(bookingDate).toLocaleDateString()}` ,
            body: `Payment Updated for booking ${new Date(bookingDate).toLocaleDateString()}`,
            sound:  "default",
            icon: "ic_launcher",
            badge: "1",
            click_action: 'FCM_PLUGIN_ACTIVITY',
            image: 'https://w7.pngwing.com/pngs/156/275/png-transparent-booking-com-logo-calendar-google-sync-time-update-computer-wallpaper-desktop-wallpaper-real-time.png'
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

router.get('/get-user-booking', (req, res) => {
    const mobileNumber = req && req.query && req.query.mobile;
    Booking.findOne({phoneNumber: mobileNumber}, function(err, result) {
        if(err) {
            res.status(404).json({status: 'No Booking Found'});
            return;
        } 
        res.status(200).json({data: result})
    })
})

router.post('/add-expense',(req,res) => {
    const _id = new ObjectId(req.body._id);
    Booking.findById({_id: _id}, function(err, data) {
        console.log(data);
        if(!data) {
            res.status(404).json({"status": "Booking not found"});
            return;
        } else {
            const query = {_id: _id};
            const expenseSheetUrl = req && req.body && req.body.url;
            const toUpdate = {'expense_sheet': expenseSheetUrl}
            console.log(toUpdate);
            Booking.findByIdAndUpdate(query, {$set: toUpdate}, function(err, data) {
                console.log(err);
                console.log(data);
                if(err) {
                    res.status(503).json({"status": "Failed To Update"}); 
                    return;
                }
                res.status(200).json({"status": 'Updated !!!'})
            })

        }
    })
})

router.get('/delete-booking', (req, res) => {
    const _id = new ObjectId(req.query._id);
    const bookingDate = req.query.bookingDate;
    Booking.remove({_id:_id}, function(err, success) {
        if(err) {
            res.status(503).json({"status": "Failed To Remove"}); 
            return;
        }
        token.find({}, function(err, success) {
            console.log("result ", success);
            if(success && success.length > 0) {
                for(let index=0; index<success.length; index++) {
                    if(success[index] && success[index].isAdmin) {
                        console.log("IS ADMIN ", success.isAdmin);
                        sendPushNotifcationDelete(success,bookingDate)
                    }
                }
            } 
        } )
        res.status(200).json({"status": 'Removed !!!'})
    })
})
router.post('/update-booking', (req, res) => {
    const toUpdate = req.body;
    const _id = new ObjectId(req.query._id);
    const bookingDate = req.query.bookingDate
    Booking.findByIdAndUpdate({_id: _id}, {$set: toUpdate}, function(err, data) {
        if(err) {
            res.status(503).json({"status": "Failed To Update"}); 
            return;
        }
        token.find({}, function(err, success) {
            console.log("result ", success);
            if(success && success.length > 0) {
                for(let index=0; index<success.length; index++) {
                    if(success[index] && success[index].isAdmin) {
                        console.log("IS ADMIN ", success.isAdmin);
                        sendUpdateNotification(success,bookingDate)
                    }
                }
              
            } 
        } )
        res.status(200).json({"status": 'Updated !!!'})
    })

})

module.exports = router