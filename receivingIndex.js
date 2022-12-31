require('dotenv/config')
const { createInvoice } = require("./createReceiving.js");
const express = require('express');
const router = express.Router();
const fs = require('fs');


router.post('/create_receiving_slip',async (req, res) => {
  const body = req && req.body;
   const payload = {
     date: body.date,
    name: body.name,
    address: body.address,
    mobileNumber: body.mobileNumber,
    securityDeposit: body.securityDeposit,
    items: body.items
   }
  const invoice = payload
  createInvoice(invoice, "receiving.pdf",  res);
  setTimeout( () => {
        const file = fs.readFileSync('receiving.pdf', 'binary')
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=receiving.pdf');
        res.write(file, 'binary');
        res.end();
  }, 1000)  
})


module.exports = router;