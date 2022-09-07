require('dotenv/config')
const mongoose = require('mongoose');
const booking = require('./models/Booking');
mongoose.connect(
    process.env.DB_CONNECTION
    , (e) => {
    console.log('Connected to Database ' + process.env.DB_CONNECTION);
});



function sendMessage() {
    booking.find({}, function(err , data) {
        console.log("ERROR ", err);
        console.log("DATA ==> ", data);

    })
}

sendMessage();