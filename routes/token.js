const express = require('express');
const Token = require('../models/Tokens');
const router = express.Router();
const AppUser = require('../models/AppUser')

router.post('/add_tokens', (req, res) => {
    const fcm_token = req && req.body && req.body.fcm_token;
    const addToken = new Token({'fcm_token': fcm_token,phoneNumber: req.body.phoneNumber ,isAdmin: req.body.isAdmin})
    AppUser.findOneAndUpdate({mobile:req.body.phoneNumber}, {$set:{fcm_token: fcm_token}}, function(err, succ){
        console.log('FCM TOKEN ADDED TO USER', req.body.phoneNumber);
    })
    addToken.save({'fcm_token': fcm_token, 'admin': false, phoneNumber: req.body.phoneNumber, isAdmin: req.body.isAdmin}).then(result => {
        if(!result)   {
            res.status(200).json({status: false});
            return;
        } 
        res.status(200).json({status: true, docs: result})
    })
})

router.get('/get-token', (req, res) => {
    const user_device_token = req && req.query && req.query.device_id;
    Token.findOne({device_id: user_device_token}, function(err, token) {
        if(!token) {
            res.status(200).json({admin: false});
            return;
        }
        res.status(200).json({admin: true})
    })
})

module.exports = router