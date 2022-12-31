const express = require('express');
const Receiving = require('../models/Receiving');

const router = express.Router();

router.post('/create', (req, res) => {
    const ReceivingDoc = new Receiving(req.body);
    console.log('check');
    ReceivingDoc.save(req.body, function(err, success) {
        if(err) {
            console.log(err);
            res.status(500).json({"status": "Internal Server Error"});
            return;
        } 

        res.status(201).json({status: "created"});
    })
})

router.get('/get', (req, res) => {
    Receiving.find({}, function(err, receiving){
        if(err) {
            res.status(500).json({"status": "Internal Server Error"});
            return;
        } 
        res.status(200).json(receiving)
    })
})

module.exports = router;