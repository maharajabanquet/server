const express = require('express');
const Lagan = require('../models/Lagan');

const router = express.Router();

router.post('/add-lagan', (req, res) => {
    const LaganDoc = new Lagan(req.body);
    LaganDoc.save(req.body, function(err, success) {
        if(err) {
            res.status(500).json({"status": "Internal Server Error"});
            return;
        } 

        res.status(201).json({status: "created"});
    })
})

router.get('/get-lagan', (req, res) => {
    Lagan.find({}, function(err, laganData){
        if(err) {
            res.status(500).json({"status": "Internal Server Error"});
            return;
        } 
        res.status(200).json(laganData)
    })
})

module.exports = router;