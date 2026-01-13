const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const nodemailer = require('nodemailer');

const iplantModel = require('./iplantModel')
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
console.log(process.env.openAPIKEY);
const axios = require('axios');

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
    let base64Image = await iplantModel.findOne({})
    base64Image = base64Image['base64Image']
   
    aiBase64Image = 'data:image/png;base64,' + base64Image.toString()
  
   
  if (!aiBase64Image) {
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
                url: aiBase64Image,
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
    const htmlContent = aiResponse
  .replace(/\n/g, '<br>')          // newline to <br>
  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');  // bold markdown to <strong>
    mail(htmlContent, base64Image)
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



async function mail(context, base64) {
  console.log("base64");
  
  console.log(base64);
  
  
  // Read image and convert to base64


  const payload = {
    sender: { name: 'iPlantIntelliJ', email: 'ankit.meera.naresh@gmail.com' },
    to: [{ email: 'ankit.kumar.cs@outlook.com' }],
    subject: 'iPlantIntelliJ Analysis',
    htmlContent: `<p>Please find soil analysis of plant image attached in this mail<br></p>
   
    <br><br>
    ${context}
    `,
    attachment: [
      {
        name: 'image.png',
        content: base64,
        contentId: 'plantLogo' // used in img src="cid:plantLogo"
      }
    ]
  };

  try {
    const res = await axios.post('https://api.brevo.com/v3/smtp/email', payload, {
      headers: {
        'api-key': process.env.apiMail,  // replace with your actual key
        'Content-Type': 'application/json'
      }
    });

    console.log('Email sent!', res.data);
  } catch (err) {
    console.error('Error sending email:', err.response?.data || err.message);
  }
}


module.exports = router;
