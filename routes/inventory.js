const express = require('express');
const INVENTORY = require('../models/Inventory');
const router = express.Router();


router.post('/add-inventory', (req, res) => {
    const inventory = new INVENTORY(req.body);
    inventory.save(req.body).then(data => {
        res.status(200).json({'success': data});
    }).catch(err => {
        console.log(err);
        res.status(503).json({'error': 'Internal Server Error'})
    })
})

router.get('/get-inventory-list', (req, res) => {
    INVENTORY.find({}, function(err, result) {
    res.status(200).json({'inventory': result});
   })
})


module.exports = router