const express = require('express');
const CashInflow = require('../models/CashFlowV1');
const router = express.Router();

router.post('/get-cash-flow', (req, res) => {
    const body = req && req.body && req.body;
    const query = {}
   
    if(req && req.body && req.body.startDate) {
        let sDate = new Date(body.startDate);
        sDate.setDate(sDate.getDate() + 1);
        let eDate = new Date(body.endDate);
        eDate.setDate(eDate.getDate() + 1);
        query['transactionDate'] =  {"$gte": sDate , "$lt": eDate}
        query['transactionType'] = body.type;
        query['is_booking'] = body.is_booking;
         if(body.singleDate) {
            let tDate = new Date(body.singleDate);
            tDate.setDate(tDate.getDate() + 1);
            delete query['transactionDate']
            query['transactionDate'] = tDate
         }
    }
    if(body.type == undefined) {
        delete query['transactionType'];
    }
    if(body.is_booking == undefined) {
        delete query['is_booking'];
    }
    console.log(query);
   

     console.log("---",query);
     
    CashInflow.find(query, function(err, result) {
        if(err) {
            console.log(err);
            res.status(503).send({'status': 'Error while fetching cash in flow'});
            return;
        }
        res.status(200).send({'docs': result});
    })
})

router.post('/add-cash-inflow', (req, res) => {
    const payload = req && req.body;
    const docs = new CashInflow(payload);
    docs.save(payload).then(result => {
        res.status(200).send({'status': 'Expense has been added'});
    }, (err) => {
        res.status(503).send({'status': 'Error storing cash in flow'});

    })
})

router.get('/deletecashflow', (req, res) => {
    query = req && req.query;
    CashInflow.findOneAndDelete(query, function(err, result) {
        if(err) {
            res.status(500).json({status: 'failure'});
            return;
        }
        res.status(200).json({status: 'success'});
    },(err) => {
        console.log(err);
    })
})


module.exports = router;