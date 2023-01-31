require('dotenv/config')
const { createInvoice } = require("./createReceiving.js");
const express = require('express');
const router = express.Router();
const fs = require('fs');
function numberWithCommas(number) {
  if(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }  else {
    return 0
  }
}

router.post('/create_receiving_slip',async (req, res) => {
  const body = req && req.body;
   const payload = {
     date: body.date,
    name: body.name,
    address: body.address,
    mobileNumber: body.mobileNumber,
    securityDeposit: numberWithCommas(body.securityDeposit),
    items: body.items
   }
   console.log(payload.securityDeposit);
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