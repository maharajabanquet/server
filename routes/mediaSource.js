const express = require('express');
const cloudinary = require('cloudinary')
const router = express.Router();
const fs = require('fs');
const { result } = require('lodash');
const Jimp = require("jimp");
const path = require('path');
const logSymbols = require('log-symbols');
const MEDIA = require('../models/Media')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});


router.post('/add-media', (req, res) => {
    const addMedia = new MEDIA(req.body);
    addMedia.save(req.body).then(result => {
        res.status(200).json({status: 'ok'})
    })
})

router.get('/get-all-media', (req, res) => {
    const type = req && req.query && req.query.type;
    let projection = {};
    if(type === 'photos') {
      projection = {type: 'photos'}
    } 
    if(type === 'videos') {
      projection = {type: 'videos'}

    }
    MEDIA.find(projection, function(err, success) {
      res.status(200).json(success)
    }) 
})



router.post('/upload-media', (req, res) => {
  let filePath = `../upload/${req.body.fileName}.png`;
  let buffer = Buffer.from(req.body.file.split(',')[1], "base64");
  fs.writeFileSync(path.join(__dirname, filePath), buffer)
  cloudinary.v2.uploader.upload(`./upload/${req.body.employeeName}.png`, { public_id: `media/${req.body.employeeName}.png` },
    function (error, result) {
      console.log(result);
      res.json({ status: 'success', msg: 'file uploaded', url: result && result.url })
      fs.unlink(`./upload/${req.body.employeeName}.png`, function (err) {
        console.log(logSymbols.error, `${filePath} hasbeen removed`);
      })
    })
})

module.exports = router