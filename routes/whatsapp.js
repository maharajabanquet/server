const express = require('express');
const whatsappWeb = require('../thirdparty/whatsappweb');
const router = express.Router();

const whatsapp = new whatsappWeb();

router.get('/generate-qr', async (req, res)=> {
    whatsapp.generateQR(res);
    
})

router.get('/check-auth', (req, res) => {
    whatsapp.authenticate(res)
})

// whatsapp.clientReady();
whatsapp.messageReove();
whatsapp.wishBaby();
whatsapp.run();

module.exports = router;


