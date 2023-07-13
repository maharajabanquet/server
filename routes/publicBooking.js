const express = require('express');
const router = express.Router();
const PublicBooking = require('../models/PublicBooking');
const nodemailer = require('nodemailer');
require('dotenv/config')

const transporter = nodemailer.createTransport({    
    host: "smtp.gmail.com",  
    service: 'gmail',
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers:'SSLv3'
    },
    requireTLS:true,
    port: 465,
    debug: true,
    auth: {
        type: "login", // default
        user: process.env.GODADDYEMAIL,
        pass: process.env.GODADDYPASSWORD
    }
});

function sendMail(res, booking) {
    console.log(booking);
    var mailOptions = {
        from: process.env.GODADDYEMAIL,
        to:  ["sanchay081@gmail.com", "ankit.kumar.cs@outlook.com", "naresh1965.kr@gmail.com"],
        bcc: [process.env.GODADDYEMAIL ],
        subject: `Maharaja Banquet | Booking Enquiry From App`,
        text: 'Booking enquiry',
        html: `   <h1 style="color:#7e6130;text-align:center">
        Recieved Booking Request For ${new Date(booking.bookingDate).toLocaleDateString()}
     </h1>
     <hr>
         <div>
             <div style="font-weight:bold;color:green;text-decoration:underline;">Customer Details:</div>
             <p>Customer Name: ${booking.customerName} <br>
             Phone Number: ${booking.mobile} <br>
             Address: ${booking.address}<br>
             Requirement: ${booking.requirement}
             <p>
         </div>
             <hr>
             <h3>Please contact customer for booking...</h3>
             <hr>
             <br>
             <br>
                        `
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
            res.status(200).json({status:'ok'})

        }
      });
}

router.post('/add-booking', (req, res) => {
    const bookingDoc = new PublicBooking(req.body);
    bookingDoc.save(req.body).then((result => {
        console.log('going insde');
        sendMail(res, req.body)
    })).catch(error => {
        if (error.name === "ValidationError") {
            let errors = {};
      
            Object.keys(error.errors).forEach((key) => {
              errors[key] = error.errors[key].message;
            });
            errors['status'] = 'Validation Failed'
      
            return res.status(400).send(errors);
        }})
})

module.exports = router
