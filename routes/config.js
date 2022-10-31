const express = require('express');
const Config = require('../models/Config');

const router = express.Router();
var _ = require('lodash');

router.get('/get-config', (req, res) => {
    Config.findOne({}, function(err, result) {
        res.status(200).json({'config': result});
    })
})

router.post('/update-config', (req, res) => {
    console.log(req.body);
    Config.update({}, {$set: {[_.camelCase(req.body.name)]: Number(req.body.price)}}, function(err, result) {
        res.status(200).json({'status': 'success'});
    })
})

module.exports = router;