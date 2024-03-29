
/**
 * Booking Notification CRON JOB
 * VERSION: 1.0.0
 * Author: Ankit Kumar
 * Company: Maharaja Banquet
*/

require('dotenv/config')
const { Client, LocalAuth, LegacySessionAuth } = require('whatsapp-web.js');
const mongoose = require('mongoose');
const booking = require('./models/Booking');
// const qrterminal = require('qrcode-terminal')
var moment = require('moment'); // require
moment().format(); 

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
        // qrterminal.generate(qr, {small:true})
        console.log(qr);
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
                    const chatId = `91${element.phoneNumber}@c.us`;
                    const cancelDate = element.cancel_date;
                    const reminderDate = element.reminder_date;
                    // const message = `*Gentle Reminder from Maharaja:* \nHi ${element.firstName}, Please clear balance amount 2 Week before ${element.bookingDate} to avoid cancellation`
                    const message = `*Hi ${element.firstName} Gentle Reminder From Maharaja Banquet:* \nPlease clear all the dues before ${element.bookingDate} to avoid booking cancellation`
                    
                    userData.push({'chatId': chatId, 'message': message, 'cancelDate': cancelDate, 'reminderDate': reminderDate, 'bookingDate': element.bookingDate, 'phoneNumber': element.phoneNumber, 'status': element.status, firstName: element.firstName})
                })
                for(let index=0; index<userData.length ; index++) {
                    console.log(userData[index].status);
                    if(userData && userData[index].status === 'approved') {
                        console.log("TESTING NOTIFICATION");
                        let today = moment().startOf('days')
                        let isSame = today.isSame(moment(userData[index].reminderDate).startOf('days'));
                        console.log(isSame);
                        let isCanelDate = today.isSame(moment(userData[index].cancelDate).startOf('days'))
                        console.log("TODAY ", today);
                        console.log("REMINDER DATE ", moment(userData[index].reminderDate).startOf('days'));
                        console.log("CANCEL DATE ", moment(userData[index].cancelDate).startOf('days'));
                        if(isSame) {
                            console.log("Booking Reminder Detected ", userData[index].reminderDate);
                            console.log("Message TO: ", userData[index].chatId);
                            client.sendMessage(userData[index].chatId, userData[index].message)
                        };
                        if(isCanelDate) {
                            booking.findOneAndUpdate({'phoneNumber': userData[index].phoneNumber}, {$set: {status: 'cancelled'}}, function(err, data){
                                console.log("BOOKING CANCELLED FOR ",userData[index].bookingDate);
                                console.log("Message TO: ", userData[index].chatId);
                                client.sendMessage(userData[index].chatId, `*Hi ${userData[index].firstName} Gentle Reminder From Maharaja Banquet:* \nYou Booking has been cancelled for ${userData[index].bookingDate}.`)
                            });
                        }
                    }
                   
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


