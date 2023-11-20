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


router.post('/opt-auth', (req, res) => {
	const body = req && req.body;
    const auth_user = new otpAuth(body)
    auth_user.save(auth_user);
    res.status(200).json({'status': 'Added'});
})

router.get('/get-auth', (req, res) => {
	otpAuth.find({}, function(err, result ) {
		res.send(result)
	})
})






module.exports = router;