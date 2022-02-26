const express = require('express');
const Auth = require('../models/Auth');
const bcrypt = require('bcryptjs');

const router = express.Router();


router.get('/security', (req, res) => {
    Auth.findOne({}, function(err, result) {
        let response = {username: btoa(result.username), password: btoa(result.password)}
        let isPasswordMatch = encryptPassword(atob(req.query.password), result.password, res)
        
    })
})

function encryptPassword(simplePassword, dbhash, res) {
// Requiring module


const password = simplePassword;
var hashedPassword = dbhash

// Encryption of the string password
bcrypt.genSalt(10, function (err, Salt) {

	// The bcrypt is used for encrypting password.
	bcrypt.hash(password, Salt, function (err, hash) {

		if (err) {
			return console.log('Cannot encrypt');
		}
		bcrypt.compare(password, hashedPassword,
			async function (err, isMatch) {
			// Comparing the original password to
			// encrypted password
			if (isMatch) {
                console.log(isMatch);
				console.log('Encrypted password is: ', password);
				console.log('Decrypted password is: ', hashedPassword);
                res.status(200).json({'authorized': true});
			}

			if (!isMatch) {
			
				// If password doesn't match the following
				// message will be sent
                console.log(hashedPassword + ' is not encryption of '
				+ password);
                res.status(200).json({'authorized': false});

			
			}
		})
	})
})

 

}





module.exports = router;