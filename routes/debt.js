const express = require('express');
const Debt = require('../models/Debt');

const router = express.Router();


router.post('/add-debt', (req, res) => {
    const docs = new Debt(req.body);
    docs.save(req.body).then(resolve => {
        res.status(200).json({'status': 'success'});
    }).catch(err => {
        res.status(503).json({'error': 'Internal Server Error'})
    })
})

router.get('/get-debt', (req, resp) => {
    Debt.find({}, function(err, res) {
        resp.status(200).json({'debt': res});
    })
})

router.post('/update-payment', (req, resp) => {
    const name = req && req.query && req.query.name;
    const payload = req && req.body;
    console.log(name);
    Debt.findOne({name: name}, function(err, result) {
        console.log(result);
        const payment_history_cp = result && result.payment_history;
        const currentBalance = result && result.balance;
        const update_balance = currentBalance - payload.amount;
        payment_history_cp.push(payload);
    Debt.update({name: name}, {$set: {payment_history: payment_history_cp, balance: update_balance}}, function(err, results) {
        if(err) {
            console.log(err);
            return;
        }
        resp.status(200).json({'status': 'success'});

    })
    })
})

module.exports = router;