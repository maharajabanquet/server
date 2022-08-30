const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fs = require('fs')
require('dotenv/config')
const bodyParser = require('body-parser');
const cors = require('cors');
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

 
let db_uri = undefined;
if(process.env.ENV = 'LOCAL') {
    db_uri = process.env.LOCAL_DB
} else {
    db_uri = process.env.DB_CONNECTION
}



// Connect To DB
mongoose.connect(
    db_uri
    , (e) => {
    console.log('Connected to Database ' + db_uri);
});

// Listen To Server
console.log(process.env.PORT);

app.listen(process.env.PORT || 3000);