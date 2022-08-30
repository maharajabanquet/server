const express = require('express');
const Token = require('../models/Tokens');
const router = express.Router();

router.post('/add_tokens', (req, res) => {
    const device_id = req && req.body && req.body.device_id;
    const fcm_token = req && req.body && req.body.fcm_token;
    console.log(device_id);
    console.log(fcm_token);
  
    Token.findOneAndUpdate({'device_id': device_id}, {$set: {'fcm_token': fcm_token}}, function(err, success) {
        if(!success) {
            res.status(200).json({admin: false});
            return;
        }
        res.status(200).json({admin: true})
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