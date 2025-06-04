const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

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
  const prompt = req.body.prompt || "I have shared plant and the soil metrics can u tell me soil health along with plant name ?";
    let base64Image = await iplantModel.findOne({})
    base64Image = base64Image['base64Image']

   
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
    res.status(200).json({ message: aiResponse });
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
