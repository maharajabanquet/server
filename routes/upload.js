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
  let filePath = `../upload/${req.body.employeeName}.png`;
  let buffer = Buffer.from(req.body.file.split(',')[1], "base64");
  fs.writeFileSync(path.join(__dirname, filePath), buffer)
  cloudinary.v2.uploader.upload(`./upload/${req.body.employeeName}.png`, { public_id: `employee_document/${req.body.employeeName}.png` },
    function (error, result) {
      res.json({ status: 'success', msg: 'file uploaded', url: result && result.url })
      fs.unlink(`./upload/${req.body.employeeName}.png`, function (err) {
        console.log(logSymbols.error, `${filePath} hasbeen removed`);
      })
    })
})

module.exports = router;