const mongoose = require('mongoose');


const otpLessAuthUser = mongoose.Schema({
   user: {
   }
})  

module.exports = mongoose.model('auth-user', otpLessAuthUser);
