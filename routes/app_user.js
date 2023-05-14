const express = require('express');
const AppUser = require('../models/AppUser');

const router = express.Router();

router.post('/login', (req, res) => {
    mobile = req.body.mobile;
    password = req.body.password;
    console.log(mobile);
    console.log(password);

    AppUser.findOne({mobile: mobile, password: password}, function(err, result) {
        console.log(result);
        if(!result) {
            res.status(404).json({'user': 'not found'});
            return;
        }
            res.status(200).json({'user': result});
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

module.exports = router;
