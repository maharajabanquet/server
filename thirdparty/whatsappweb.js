const { Client, LocalAuth } = require('whatsapp-web.js');
const  qrcode  = require('qrcode-terminal')
const axios = require('axios');
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true
	}
});


class WhatsappBot {
    generateQR(res) {
        client.on('qr', (qr) => {
            console.log('Generated!');
            res.status(200).json({"qr_code":qr})
            
        });
    }

    triggerMessage(number, text, trigger) {
        if(trigger) {
            client.on('ready', () => {
                const number = number;
                const text = text;
                const chatId = number.substring(1) + "@c.us";
                client.sendMessage(chatId, text);
                return true
            });
        }
    }
    
    clientReady() {
        client.on('ready', () => {
            console.log('READY');
          });
    }

    authenticate(res) {
        client.on('authenticated', session => {
            console.log('authenticated');
            res.status(200).json({status: 'authenticated'})
          });
    }

    wishBaby() {
        client.on('message',  message => {
            const content = message.body;
            if(content === "Good morning baby" || content === "Good Gorning baby" || content === "good morning baby") {
               client.sendMessage(message.from, "Good Morning My Love");
            }
        })
    } 
    run() {
        client.initialize();
    }

}

module.exports = WhatsappBot;