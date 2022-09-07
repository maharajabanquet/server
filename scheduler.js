
require('dotenv/config')
const { Client, LocalAuth } = require('whatsapp-web.js');
const mongoose = require('mongoose');
const booking = require('./models/Booking');
// Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION
    , (e) => {
    console.log('Connected to Database ' + process.env.DB_CONNECTION);
});

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true
	}
});


class WhatsappBotScheduler {
    generateQR(res) {
        client.on('qr', (qr) => {
            console.log('Generated!');
            res.status(200).json({"qr_code":qr})
        });
    }
    
    clientReady() {
        let userData = [];
       
        client.on('ready', () => {
            booking.find({}, function(err, data) {
                if(!data){
                    console.log('No Booking, Task Skipped');
                } else {
                    data.forEach(element => {
                        const chatId = `917494972470@c.us`;
                        // const message = `*Hi Praveen, Please clear balance amount 2 Week before ${element.bookingDate} else booking will be cancelled*`
                        const message = `*Hi Praveen, Please clear balance amount 2 Week before  else booking will be cancelled*`

                        userData.push({chatId: chatId, message: message})
                        // client.sendMessage(chatId, message)
                    })
                    for(let index=0; index<userData.length ; index++) {
                        client.sendMessage(userData[index].chatId, userData[index].message)

                    }
                    console.log("TASK COMPLETED");
                }
            })
          });
    }

    checkPing() {
        client.on('message_ack', (msg, ack) => {
            if(ack == 1) {
                // The message was read
                process.exit();
            }
        });
    }
    authenticate() {
        client.on('authenticated', session => {
            console.log('authenticated');
          });
    }
    
    run() {
        client.initialize();
    }

}

const whatsappbot = new WhatsappBotScheduler();
whatsappbot.run();
whatsappbot.authenticate();
whatsappbot.clientReady();
whatsappbot.checkPing();


