const express = require('express');
const Auth = require('../models/Auth');

const router = express.Router();


router.get('/security', (req, res) => {
    Auth.findOne({}, function(err, result) {
		console.log(result.username);

		console.log(result.password);
		if(result.username === req.query.username && result.password === req.query.password) {
			res.status(200).json({'authorized': true});
		} else {
			res.status(401).json({'authorized': false});

		}
    })  
})


 






module.exports = router;