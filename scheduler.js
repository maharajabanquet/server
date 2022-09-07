
require('dotenv/config')
const { Client, LocalAuth, LegacySessionAuth } = require('whatsapp-web.js');
const mongoose = require('mongoose');
const booking = require('./models/Booking');
const qrterminal = require('qrcode-terminal')
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
function generateQR() {
    client.on('qr', (qr) => {
        qrterminal.generate(qr, {small:true})
    });
}

function clientReady() {
    let userData = [];
    client.on('ready', () => {
        console.log("READY");
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

function checkPing() {
    client.on('message_ack', (msg, ack) => {
        if(ack == 1) {
            // The message was read
            process.exit();
        }
    });
}
 
function authenticate() {
    client.on('authenticated', session => {
        
        console.log('authenticated', session);
      });
}

function run() {
    console.log("running");
    client.initialize();
}

// whatsappbot.generateQR();
// generateQR();

run();
clientReady();
authenticate();
checkPing();


