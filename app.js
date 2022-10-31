const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fs = require('fs')
require('dotenv/config')
const bodyParser = require('body-parser');
const cors = require('cors');
const logSymbols = require('log-symbols');



app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
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
// const invoiceRoutes = require('./routes/invoice_generator');
const employeeRoutes = require('./routes/employee');
const authRoutes = require('./routes/auth');
const pdfkitRoutes = require('./invokeInvoicePrint');
const trafficRoutes = require('./routes/traffic')
const LaganRoutes = require('./routes/lagan');
const tokenRoutes = require('./routes/token');
// const whatsappRoutes = require('./routes/whatsapp');
const CommRoutes = require('./routes/communication');
const TaskRoutes = require('./routes/task');
const departmentRoute = require('./routes/department');
const uploadRoutes = require('./routes/upload');





app.use('/api/v1/enquiry', enquiryRoutes);
app.use('/api/v1/booking', bookingRoutes);
app.use('/api/v1/config', configRoutes);
// app.use('/api/v1/invoice', invoiceRoutes);
app.use('/api/v1/employee', employeeRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/invoice', pdfkitRoutes);
app.use('/api/v1/traffic', trafficRoutes);
app.use('/api/v1/lagan', LaganRoutes);
app.use('/api/v1/token', tokenRoutes);
// app.use('/api/v1/whatsapp', whatsappRoutes);
app.use('/api/v1/coms', CommRoutes);
app.use('/api/v1/task', TaskRoutes);
app.use('/api/v1/department', departmentRoute);
app.use('/api/v1/upload', uploadRoutes)




app.use(express.static(process.cwd()+"/dist/maharaja/"));
app.get('/booking', (req,res) => {
    res.sendFile(process.cwd()+"/dist/maharaja/index.html")
  });



console.log(logSymbols.info, "Connecting to Database...");
mongoose.connect(
    process.env.DB_CONNECTION
    , (e) => {
        console.log(logSymbols.success, 'Database Connection Established...');
        startServer();
       
});


function startServer() {
    app.listen(process.env.PORT, function(request) {
        console.log(logSymbols.warning,`Server Running On ${process.env.HOSTNAME}:${process.env.PORT}`);
        if(process.env.ENV === 'local') {
        console.log(logSymbols.info,`Client Running On ${process.env.HOSTNAME}:4200`);

        }
    });
}


