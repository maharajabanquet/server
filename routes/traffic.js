const express = require('express');
const router = express.Router();
const traffic = require('../models/Traffic')

router.post('/snapshot_visitor', (req, res) => {

    const trafficDoc = new traffic(req.body);
    trafficDoc.save(req.body, function(err, trafficInst) {
        const totalHit = traffic.find({})
        totalHit.count(function(err, count){
            res.status(200).json({'totalHit': count})
        })
    })
})

module.exports = router