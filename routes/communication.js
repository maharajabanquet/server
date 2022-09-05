const express = require('express');
const comm = require('../models/Communication');

const router = express.Router();


router.post('/update-com', (req, res) => {
    const status = req && req.body && req.body.status;
    const name = req && req.body && req.body.name;
        comm.findOne({}, function(err, data) {
            if(data) {
                comm.findOneAndUpdate({name: name}, {$set: {status: status}}, function(err, status)  {
                    res.status(200).json({status: 'ok'})
                })
            } else {
                const doc = req.body;
                const comms = new comm(doc)
                comms.save(doc);
                res.status(200).json({'status': 'ok'});
            }
            
        })
   
})

router.get('/check-com', (req, res) => {
   
    comm.find({}, function(err, data) {
        if(!data) {
            res.status(200).json({docs: []});
            return;
        }else {
            res.status(200).json({docs: data});

        }
        
        

    })
})

module.exports = router;