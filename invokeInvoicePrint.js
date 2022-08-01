require('dotenv/config')
const { createInvoice } = require("./createInvoice.js");
const express = require('express');
const router = express.Router();
const fs = require('fs')
const crypt = require('crypto');
const cloudinary = require('cloudinary')
const bookingSchema = require('./models/Booking');
const counterSchema = require('./models/Counter');
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });

router.post('/generate_invoice',async (req, res) => {
  let counter;
  await counterSchema.findOne({}).then(data => {
    counter = data.index;
  })
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
        invoice_nr: generateInvoiceNumber(counter),
        bookingDate: convertBookingDate(req.body.bookingDate)
      };
      
      createInvoice(invoice, "invoice.pdf", res)
    
      bookingSchema.findOneAndUpdate({phoneNumber: req.body.phoneNumber}, {$set: {invoice_generated: true}}).then((a) => {
        console.log("Invoice updated");
      })

        setTimeout( () => {
            cloudinary.v2.uploader.upload("invoice.pdf", {public_id: req.body.phoneNumber}, 
            function(error, result) {
                const file = fs.readFileSync('invoice.pdf', 'binary')
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
                res.write(file, 'binary');
                res.end();
             });
        }, 1000)
  })
  
function generateInvoiceNumber(count) {
  console.log(count);
   counterSchema.findOneAndUpdate({index: count}, {$set: {index: count+1}}).then((updateCounter) => {
    console.log(updateCounter);
     return `${count}_MB_${new Date().getUTCFullYear()}`
   })
}

function convertBookingDate(date) {
    var initial = date.split(/\//);
    return [ initial[1], initial[0], initial[2] ].join('/')
}



module.exports = router;