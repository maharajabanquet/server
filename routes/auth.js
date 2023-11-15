const express = require('express');
const Auth = require('../models/Auth');
const otpAuth = require('../models/otplessAuth');
const router = express.Router();


router.get('/security', (req, res) => {
    Auth.findOne({}, function(err, result) {
		if(result.username === req.query.username && result.password === req.query.password) {
			res.status(200).json({'authorized': true});
		} else {
			res.status(401).json({'authorized': false});

		}
    })  
})


router.post('/', (req, res) => {
	const body = req && req.body;
    const auth_user = new otpAuth(body)
    auth_user.save(depart);
    res.status(200).json({'status': 'Added'});
})
 






module.exports = router;