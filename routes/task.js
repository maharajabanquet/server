const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary')
const task = require('../models/Task');

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });



router.post('/add-task', async (req, res) => {
    let signedUrl =  await multiUpload(req, res);
    console.log(signedUrl);
   
})

router.get('/get-task', async (req, res) => {
    task.find({}, function(err, task)  {
        console.log(task);
            res.status(200).json({status: 'success', task: task})
    })
})

function multiUpload(req, res) {
    let signedUrl = [];
        for(let index=0; index<req.body.images.length; index++) {
           const promise = new Promise((resolve, reject) => {
            cloudinary.v2.uploader.upload(req.body.images[index], 
            function(error, result) {
                console.log(error);
                if(result) {
                    resolve(signedUrl.push(result.url))
                }
             });
           })
           promise.then(data => {
            if(req.body.images.length === signedUrl.length) {
                console.log(signedUrl);
                const toAdd = {
                    images: signedUrl,
                    title: req.body.title,
                    date: req.body.date,
                    staffName: req.body.staffName
                }
                const taskDoc = new task(toAdd);
                taskDoc.save(toAdd, function(err, success) {
                    console.log(success);
                    if(err) {
                res.status(503).json({status: 'failure'});
                return;
                }
                res.status(200).json({status: 'success', url: signedUrl});
                })

            }
           })
        }
}
module.exports = router;