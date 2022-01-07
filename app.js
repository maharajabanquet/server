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



app.use(express.static(process.cwd()+"/dist/maharaja/"));
app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/dist/maharaja/index.html")
  });

// Import Routes
const enquiryRoutes = require('./routes/enquiry');
const bookingRoutes = require('./routes/booking');
const configRoutes = require('./routes/config');
const invoiceRoutes = require('./routes/invoice_generator');
const employeeRoutes = require('./routes/employee');



app.use('/api/v1/enquiry', enquiryRoutes);
app.use('/api/v1/booking', bookingRoutes);
app.use('/api/v1/config', configRoutes);
app.use('/api/v1/invoice', invoiceRoutes);
app.use('/api/v1/employee', employeeRoutes);





// Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION
    , (e) => {
      console.log(e)
    console.log('Connected to Database ' + process.env.DB_CONNECTION);
});

// Listen To Server
console.log(process.env.PORT);

app.listen(process.env.PORT || 3000);