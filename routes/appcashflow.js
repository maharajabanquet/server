const express = require('express');
const AppCashFlow = require('../models/AppCashflow');
const router = express.Router();


router.post('/app-insert-cashflow', (req, res) => {
    const payload = req && req.body;
    const docs = new AppCashFlow(payload);
    docs.save(payload).then(result => {
        res.status(200).send({'status': 'Expense has been added'});
    }, (err) => {
        res.status(503).send({'status': 'Error storing cash in flow'});

    })
})

router.get('/app-get-cashflow', (req, res) => {
    const query = req && req.query;
    AppCashFlow.find(query, function(err, result) {
        res.status(200).send(result);
    })
})

router.delete('/deletecashflow', (req, res) => {
    query = req && req.query;
    AppCashFlow.findOneAndDelete(query, function(err, result) {
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