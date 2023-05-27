const express = require('express');
const Token = require('../models/Tokens');
const router = express.Router();

router.post('/add_tokens', (req, res) => {
    const fcm_token = req && req.body && req.body.fcm_token;
    const addToken = new Token({'fcm_token': fcm_token, 'admin': false})
    addToken.save({'fcm_token': fcm_token, 'admin': false, phoneNumber: req.body.phoneNumber}).then(result => {
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