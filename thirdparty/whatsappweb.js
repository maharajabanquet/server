const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true

	}
});


class WhatsappBot {
    generateQR() {
        client.on('qr', (qr) => {
            qrcode.generate(qr, {small: true});
            console.log('QR Generated');
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

    authenticate() {
        client.on('authenticated', session => {
            console.log('authenticated');
          });
    }

    wishBaby() {
        client.on('message', async message => {
            const content = message.body;
            if(content === "i love u" || content === "Good Gorning baby" || content === "good morning baby" || content === "I love you" ||  content.toLowerCase() == 'i love you' || content.toLowerCase() === 'i love u') {
               client.sendMessage(message.from, "I LOVE YOU TOO BABY");
            } else if(content === 'meme' || content === 'meme'){
                const meme = await axios("https://meme-api.herokuapp.com/gimme").then(res => res.data)
                client.sendMessage(message.from, await MessageMedia.fromUrl(meme.url))
            }
        })
    } 

    messageReove() {
        client.on('message_revoke_everyone', async (after, before) => {
            // Fired whenever a message is deleted by anyone (including you)
           
            client.sendMessage(before.from, `Deleted message recovered: ${before.body}`)
        });
    }
   
    run() {
        client.initialize();
    }

}


module.exports = WhatsappBot;