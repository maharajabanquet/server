const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fs = require('fs')
require('dotenv/config')
const bodyParser = require('body-parser');
const cors = require('cors');

 
const { Client, LocalAuth } = require('whatsapp-web.js');
const  qrcode  = require('qrcode-terminal')
const client = new Client({
    authStrategy: new LocalAuth()
});
 

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true})
});

client.on('ready', () => {
    console.log('Client is ready!');
    const number = "+918884540523";
    const text = "Hey Ankit Sending this message from heroku";
    const chatId = number.substring(1) + "@c.us";
    client.sendMessage(chatId, text);

});

client.on('message', message => {
	console.log(message.body);
});



 
client.initialize();
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




// Import Routes
const enquiryRoutes = require('./routes/enquiry');
const bookingRoutes = require('./routes/booking');
const configRoutes = require('./routes/config');
const invoiceRoutes = require('./routes/invoice_generator');
const employeeRoutes = require('./routes/employee');
const authRoutes = require('./routes/auth');
const pdfkitRoutes = require('./invokeInvoicePrint');
const trafficRoutes = require('./routes/traffic')
const LaganRoutes = require('./routes/lagan');
const tokenRoutes = require('./routes/token');


app.use('/api/v1/enquiry', enquiryRoutes);
app.use('/api/v1/booking', bookingRoutes);
app.use('/api/v1/config', configRoutes);
// app.use('/api/v1/invoice', invoiceRoutes);
app.use('/api/v1/employee', employeeRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/invoice', pdfkitRoutes);
app.use('/api/v1/traffic', trafficRoutes);
app.use('/api/v1/lagan', LaganRoutes);
app.use('/api/v1/token', tokenRoutes)



app.use(express.static(process.cwd()+"/dist/maharaja/"));
app.get('/booking', (req,res) => {
    res.sendFile(process.cwd()+"/dist/maharaja/index.html")
  });



// Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION
    , (e) => {
    console.log('Connected to Database ' + process.env.DB_CONNECTION);
});

// Listen To Server
console.log(process.env.PORT);

app.listen(process.env.PORT || 3000);