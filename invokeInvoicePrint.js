require('dotenv/config')
const { createInvoice } = require("./createInvoice.js");
const express = require('express');
const router = express.Router();
const fs = require('fs')
const crypt = require('crypto');
const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });

router.post('/generate_invoice', (req, res) => {
    console.log(req.body);
    const invoice = {
        shipping: {
          name: req.body.firstName + " " + req.body.lastName,
          address: req.body.address,
          city: "",
          state: "",
          country: "",
          postal_code: 845305
        },
        items: [
          {
            item: req.body.requirements,
            description: "Booking Confirmed",
            quantity: 1,
            amount: 120000
          },
        ],
        subtotal: 120000,
        paid: req.body.BookingAmount,
        invoice_nr: generateInvoiceNumber(),
        bookingDate: convertBookingDate(req.body.bookingDate)
      };
        createInvoice(invoice, "invoice.pdf", res)
        setTimeout( () => {
            cloudinary.v2.uploader.upload("invoice.pdf", 
            function(error, result) {
                console.log(error);
                console.log(result);
                const file = fs.readFileSync('invoice.pdf', 'binary')
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
                res.write(file, 'binary');
                res.end();
             });
        }, 1000)
  })
  
function generateInvoiceNumber() {
    return crypt.randomInt(0, 1000000);
}

function convertBookingDate(date) {
    var initial = date.split(/\//);
    return [ initial[1], initial[0], initial[2] ].join('/')
}



module.exports = router;