const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fs = require('fs')
require('dotenv/config')
const bodyParser = require('body-parser');
const cors = require('cors');
const logSymbols = require('log-symbols');
const morgan = require("morgan");
app.use(morgan('dev'));

// const whatspp = require("./thirdparty/whatsappweb");
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// const whatsAppInstance = new whatspp()
// whatsAppInstance.run()
// whatsAppInstance.generateQR()
// whatsAppInstance.authenticate()
// whatsAppInstance.clientReady()
// whatsAppInstance.wishBaby()
const iplant = require('./iplant');


app.use('/api/v1/iplant', iplant)





// Auth
// Register





app.use(express.static(process.cwd()+"/dist/maharaja/"));
app.get('/admin-mbh', (req,res) => {
  if(req && req.query === 'app') {

  }
    res.sendFile(process.cwd()+"/dist/maharaja/index.html")
  });

app.use(express.static(process.cwd()+"/www/"));
app.get('/finance', (req,res) => {
    res.sendFile(process.cwd()+"/www/index.html")
  });
// const product_list_routes = require('./routes/product_listing');
// app.use('/api/v1/product', product_list_routes);


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


