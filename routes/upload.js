const express = require('express');
const cloudinary = require('cloudinary')
const router = express.Router();
const fs = require('fs');
const { result } = require('lodash');
const Jimp = require("jimp");
const path = require('path');
const logSymbols = require('log-symbols');


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

router.post('/upload-proof', (req, res) => {
  console.log(req.body);
  let filePath = `../upload/${req.body.fileName}`;
  let buffer = Buffer.from(req.body.file.split(',')[1], "base64");
  fs.writeFileSync(path.join(__dirname, filePath), buffer)
  cloudinary.v2.uploader.upload(`./upload/${req.body.fileName}`, { public_id: `media/${req.body.fileName}` , resource_type:'raw'},
    function (error, result) {
      console.log(result);
      res.json({ status: 'success', msg: 'file uploaded', url: result && result.url })
      fs.unlink(`./upload/${req.body.fileName}`, function (err) {
        console.log(logSymbols.error, `${filePath} hasbeen removed`);
      })
    })
})

router.post('/upload-expense-excel', (req, res) => {
      let filePath = `../upload/${req.body.fileName}`;
      let buffer = Buffer.from(req.body.file.split(',')[1], "base64");
      fs.writeFileSync(path.join(__dirname, filePath), buffer)
      try {
        cloudinary.v2.uploader.upload(`./upload/${req.body.fileName}`, 
      { resource_type: "raw" }, 
      function(error, result) {
        if(error) {
          console.log(error);
          res.status(error.http_code).json({ status: 'error', msg: error})
          return;
        }
        res.json({ status: 'success', msg: 'file uploaded', url: result && result.url })
      });

    // cloudinary.v2.uploader.upload(`./upload/${req.body.fileName}`,  { resource_type: "raw" },  { public_id: `expense_sheet/${req.body.fileName}` },
    //   function (error, result) {
    //     if(error) {
    //       console.log(error);
    //     res.status(error.http_code).json({ status: 'error', msg: error})
    //     return;
    //     }
    //     res.json({ status: 'success', msg: 'file uploaded', url: result && result.url })
    //     // fs.unlink(`./upload/${req.body.fileName}`, function (err) {
    //     //   console.log(logSymbols.error, `${filePath} hasbeen removed`);
    //     // })
    //   })
  } catch (err) {
    console.log(err);
  }
})

router.post('/upload-customer-id-proof', (req, res) => {
  let filePath = `../upload/${req.body.employeeName}.png`;
  let buffer = Buffer.from(req.body.file.split(',')[1], "base64");
  fs.writeFileSync(path.join(__dirname, filePath), buffer)
  cloudinary.v2.uploader.upload(`./upload/${req.body.employeeName}.png`, { public_id: `customer_id_proof/${req.body.employeeName}.png` },
    function (error, result) {
      res.json({ status: 'success', msg: 'file uploaded', url: result && result.url })
      fs.unlink(`./upload/${req.body.employeeName}.png`, function (err) {
        console.log(logSymbols.error, `${filePath} hasbeen removed`);
      })
    })
})

module.exports = router;