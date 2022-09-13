const express = require('express');
const Enquiry = require('../models/Enquiry');
const nodemailer = require('nodemailer');

const router = express.Router();
require('dotenv/config')
console.log(process.env.GODADDYEMAIL);
console.log(process.env.GODADDYPASSWORD);


  const transporter = nodemailer.createTransport({    
    host: "smtpout.secureserver.net",  
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers:'SSLv3'
    },
    requireTLS:true,
    port: 465,
    debug: true,
    auth: {
        user: process.env.GODADDYEMAIL,
        pass: process.env.GODADDYPASSWORD
    }
});

router.post('/add-enquiry', (req, res) => {
   console.log(req.body);
   
   const add_enquiry = new Enquiry({
       "firstName": req.body.firstName,
       "lastName": req.body.lastName,
       "phoneNumber": req.body.phoneNumber,
       "address": req.body.address,
       "BookingDate": req.body.BookingDate
    });
   add_enquiry.save().then(data => {
       res.status(200).json({'success': data});
   })
   .catch(err => {
       res.status(503).json({'error': 'Internal Server Error'})
   })
})

router.get('/view-all-enquiry', (req, res) => {
    Enquiry.find({}, function(err, result){
        res.status(200).json({'success': result});
    })
})

router.post('/contact-us', (req, res) => {
    var mailOptions = {
        from: process.env.GODADDYEMAIL,
        to:  [req.body.email],
        bcc: [process.env.GODADDYEMAIL ],
        subject: `Maharaja Banquet Booking Query`,
        text: req.body.message,
        html: `<h1 style="color:orange;text-align:center">
                   Hi ${req.body.name}, Thank you for visiting Maharaja Banquet
                </h1>
                <hr>
                    <div>
                        <div style="font-weight:bold;color:green;text-decoration:underline;">Client Details</div>
                        <p>Name: ${req.body.name} <br>
                        Phone Number: ${req.body.phone} <br>
                        Message: ${req.body.message}
                        <p>
                    </div>
                        <hr>
                        <h3>Your Query hass been recieved</h3>
                        <hr>
                        <br>
                        <br>
                        <address>
                            <div style="font-weight:bold;font-size:15px;">Address:</div>
                            Pankaj Chowk,<br>
                            near Mawesi Hospital P.O<br>
                            Raxaul, Bihar 845305 <br>
                            contact number: +918970777693<br>
                            <a href="http://www.maharajaraxaul.com/">Visit Our Website</a>
                        </address>
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
})


module.exports = router;