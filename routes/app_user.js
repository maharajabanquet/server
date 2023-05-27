const express = require('express');
const AppUser = require('../models/AppUser');
const token = require('../models/Tokens');
const FCM = require('fcm-node');
const router = express.Router();
const serverKey = "AAAA3TusO0M:APA91bFx9h7VwDVnRJiqmEVYLinnpVbkvQxCV-EgSyyugYnQtW9Mq1j_Z7GgtKiZWmu7_mcTcclTIZ2H4NvXqUI06wsJcJSCGa7OEaoYk4Ia5j1c9-rlkBUBrn7MgEyctNhiRtRotu_I"//put your server key here

router.post('/login', (req, res) => {
    console.log(req.body);
    mobile = req.body.mobile;
    password = req.body.password;
    console.log(mobile);
    console.log(password);

    AppUser.findOne({mobile: mobile, password: password}, function(err, result) {
        console.log(err);
        if(!result) {
            res.status(404).json({'user': 'not found'});
            return;
        }
            res.status(200).json({'user': result});
    })
})

router.get('/get-cart', (req, res) => {
    const mobile= req.query.mobile;
    const category = req.query.category;
    console.log(category);
    let result = []
    AppUser.findOne({mobile: mobile}, function(err, result) {
        for(let index=0; index<result.cart.length;index++) {
            if(result.cart[index].category === category) {
                res.status(200).json({'userItem': result.cart[index]})
            }
        }
      

    })
})
router.post('/add-user', (req, res) => {
    const addAppUser = new AppUser(req.body);
    addAppUser.save(req.body).then(data => {
        res.status(200).json({'success': data});
    }).catch(err => {
        res.status(503).json({'error': 'Internal Server Error'})
    })
})

router.post('/update', (req, res) => {
   let toPut = req.body;
   let mobile = req && req.query && req.query.mobile;
   AppUser.findOne({mobile: mobile}, function(err, result) {
   
    for(let index=0; index<result.cart.length;index++) {
        for(let indexx=0; indexx<result.cart[index].categoryList.length; indexx++) {
            if(result.cart[index].categoryList[indexx].itemName === req.body.itemName) {
                result.cart[index].categoryList[indexx].orderQuant = req.body.orderQuant
            }
        }
    }
    AppUser.findOneAndUpdate({mobile: mobile}, {$set: {cart:result.cart }}, function(err, success) {
        res.status(200).json({'msg': 'Ok'})
    })

   })
})

router.post('/send_notification', (req, res) => {
    token.find({}, function(err, success) {
        if(success && success.length > 0) {
            sendPushNotifcation(success, req.body)
        } 
    } )
    res.status(200).json({'msg': 'Ok'})

})


router.get('/get-user', (req, res) => {
    AppUser.find({}, function(err, result) {
            res.status(200).json(result)
    } )

})
router.get('/remove-user', (req, res) => {
    const mobile = req && req.query && req.query.mobile;
    const query = {mobile: mobile}

    AppUser.findOneAndDelete(query, function(err, result) {
            res.status(200).json({'status': 'Deleted'})
            console.log(err);
    } )

})
    
function sendPushNotifcation(ids, metaInfo) {
    let token_list = []
    ids.forEach(element => {
        token_list.push(element.fcm_token)
    });
    console.log(token_list);
    const message = {
        registration_ids: token_list ,  // array required
        notification: {
            title: metaInfo.title ,
            body: metaInfo.body,
            sound:  "default",
            icon: "ic_launcher",
            badge: "1",
            click_action: 'FCM_PLUGIN_ACTIVITY',
            image: metaInfo.img
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

module.exports = router;
