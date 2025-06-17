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
  console.log(prompt);
  
    let base64Image = await iplantModel.findOne({})
    base64Image = base64Image['base64Image']
    let tmp = base64Image['base64Image']
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
    await mail(aiResponse, tmp)
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


// function sendMail(context, base64) {
//   // Create transporter using Outlook SMTP
//   const base64Image = base64
// let transporter = nodemailer.createTransport({
//  host: 'smtp-mail.outlook.com',
//   port: 587,
//   secure: false, // use TLS
//   auth: {
//       user: process.env.mail, // your Outlook email
//       pass: process.env.password           // your email password or app password
//   },
//   tls: {
//       ciphers: 'SSLv3'
//   }
// });
// // Setup email data
// let mailOptions = {
//   from: `"Ankit Kumar" <${process.env.mail}>`,
//   to: process.env.mail,
//   subject: 'iPlant IntelliJ',
//   html: `
//   Please find below analaysis of plant soil
//   <p>Hello! Here is an image:</p><img src="cid:myimagecid"/>
//   ${context}
//   `,
//   attachments: [
//       {
//           filename: 'image.png',
//           content: base64Image,
//           encoding: 'base64',
//           cid: 'myimagecid' // must match cid in <img src="cid:...">
//       }
//   ]
// };
// transporter.verify((err, success) => {
//   if (err) {
//     console.error("SMTP Verify Error:", err);
//   } else {
//     console.log("Server is ready to take our messages:", success);
//   }
// });
// // Send email
// transporter.sendMail(mailOptions, (error, info) => {
//   console.log(info);
  
//   if (error) {
//       return console.log('Error occurred: ', error);
//   }
//   console.log('Email sent: ', info.response);
// });
// }

// async function main() {
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.office365.com', // try also smtp-mail.outlook.com if this fails
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.mail,
//       pass: process.env.password // Make sure this is the app password, not regular password
//     }
//   });

//   try {
//     // Verify SMTP connection configuration
//     await transporter.verify();
//     console.log('Server is ready to send messages');

//     let info = await transporter.sendMail({
//       from: '"Test Sender" <your-email@outlook.com>',
//       to: 'recipient@example.com',
//       subject: 'Test email from Node.js',
//       text: 'Hello! This is a test email from Node.js using Outlook SMTP with App Password.'
//     });

//     console.log('Message sent: %s', info.messageId);
//   } catch (error) {
//     console.error('Error occurred:', error);
//   }
// }


// function mail() {
//   axios.post('https://api.brevo.com/v3/smtp/email', {
//   sender: { name: 'iPlantIntelliJ', email: 'ankit.meera.naresh@gmail.com' },
//   to: [{ email: 'ankit.kumar.cs@outlook.com' }],
//   subject: 'Hello from Brevo',
//   htmlContent: '<p>This is a free email sent using Brevo API!</p>'
// }, {
//   headers: {
//     'Content-Type': 'application/json'
//   }
// }).then(res => {
//   console.log('Email sent!', res.data);
// }).catch(err => {
//   console.error('Error sending email:', err.response.data);
// });
// }


async function mail(context, base64) {
  // Read image and convert to base64


  const payload = {
    sender: { name: 'iPlantIntelliJ', email: 'ankit.meera.naresh@gmail.com' },
    to: [{ email: 'ankit.kumar.cs@outlook.com' }],
    subject: 'iPlantIntelliJ Analysis',
    htmlContent: `<p>Please find soil analysis of plant image attached in this mail<br>:</p>
   
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
