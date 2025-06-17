const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const nodemailer = require('nodemailer');

const iplantModel = require('./iplantModel')
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
console.log(process.env.openAPIKEY);

require('dotenv/config')
const openai = new OpenAI({
    apiKey: process.env.openAPIKEY, // Make sure this is set in your env
  });
router.post('/plant-analyse', async (req, res) => {
  const payload = req.body;
 
  const prompt = `
    please take a look on plant and here is the soil metric please tell me the soil health also tell me the plant name
    \n 
    Metrics Below:

    Soild Moisture: ${payload.soil_moisture},
    Salt Level: ${payload.salt_level},
    DHT Temperature: ${payload.dht_temperature},
    DHT Humidity: ${payload.dht_humidity}
  `
  console.log(prompt);
  
    let base64Image = await iplantModel.findOne({})
    base64Image = base64Image['base64Image']
    base64Image = 'data:image/png;base64,' + base64Image.toString()
  
   
  if (!base64Image) {
    return res.status(400).json({ error: "Image (base64) is required." });
  }
  
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // Vision model
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            {
              type: "image_url",
              image_url: {
                url: base64Image,
              },
            },
          ],
        },
      ],
    });

    const aiResponse = response.choices[0].message.content;
    console.log("***********PLANT ANAYLSIS REPORT***********");
    console.log(aiResponse);
    console.log("***********END OF PLANT ANAYLSIS REPORT***********");
    sendMail(aiResponse, base64Image)
    res.status(200).json({ message: aiResponse });
    res.status(200).json({ message: '' });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "Something went wrong with OpenAI." });
  }
});

router.post('/capture-base64', async(req, res) => {
    try {
        const base64Img = req.body.base64;
        await iplantModel.deleteMany({})
        const docs = new iplantModel(req.body);
        docs.save(req.body).then(data => {
            res.status(200).json({'success': data});
        }).catch(err => {
            console.log(err);
            res.status(503).json({'error': 'Internal Server Error'})
        })
       

    } catch(err) {
        console.log(err);
        res.status(503).json({'failed': 'something went wrong'})
    }
    
})
module.exports = router;


function sendMail(context, base64) {
  // Create transporter using Outlook SMTP
  const base64Image = base64
let transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // use TLS
  auth: {
      user: process.env.mail, // your Outlook email
      pass: process.env.password           // your email password or app password
  },
  tls: {
      ciphers: 'SSLv3'
  }
});
// Setup email data
let mailOptions = {
  from: `"Ankit Kumar" <${process.env.mail}>`,
  to: process.env.mail,
  subject: 'iPlant IntelliJ',
  html: `
  Please find below analaysis of plant soil
  <p>Hello! Here is an image:</p><img src="cid:myimagecid"/>
  ${context}
  `,
  attachments: [
      {
          filename: 'image.png',
          content: base64Image,
          encoding: 'base64',
          cid: 'myimagecid' // must match cid in <img src="cid:...">
      }
  ]
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  console.log(info);
  
  if (error) {
      return console.log('Error occurred: ', error);
  }
  console.log('Email sent: ', info.response);
});
}