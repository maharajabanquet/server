const express = require('express');
const CashInflow = require('../models/CashInflow');

const router = express.Router();


router.post('/add-cash-inflow', (req, res) => {
    const body = req && req.body;
    const CashInflowIns = new CashInflow(body)
    CashInflowIns.save(CashInflow);
    res.status(200).json({'status': 'Added'});
})

router.get('/get-cash-inflow', (req, res) => {
    // CashInflow.find({}, function(err, result) {
    //     res.status(200).json({data: result})
    // })
    const type = req && req.query && req.query.type;
    let query = {}
    const paginate = req && req.query && req.query.paginate;
    if(type) {
         query = {transactionType: type}
    }
    if(paginate) {
        CashInflow.find({}, function(err, result) {
            res.status(200).json({'data': result});
        })
    } 
    else {
        CashInflow.paginate({}, {page: Number(req.query.pageNo), limit: Number(req.query.pageSize)}, function(err, result){
            res.status(200).json({'data': result});
        })
    }
})

router.get('/deletecashflow', (req, res) => {
    query = req && req.query;
    CashInflow.findOneAndDelete(query, function(err, result) {
        if(err) {
            res.status(500).json({status: 'failure'});
            return;
        }
        res.status(200).json({status: 'success'});
    })
})

router.get('/filter-by-type', (req, res) => {
    const type = req && req.query.type;
    const query = {transactionType: type};
    CashInflow.find(query, function(err, result) {
        if(err) {
            res.status(404).json({status: 'Not Found'});
        }
        res.status(200).json({data: result})
    })
})

router.get('/filter-by-date', (req, res) => {
    const date = req && req.query.date;
    const query = {transactionDate: date};
    CashInflow.find(query, function(err, result) {
        if(err) {
            res.status(404).json({status: 'Not Found'});
        }
        res.status(200).json({data: result})
    })
})

router.get('/filter-by-name', (req, res) => {
    const partyName = req && req.query.name;
    const query = {partyName: partyName};
    CashInflow.find(query, function(err, result) {
        if(err) {
            res.status(404).json({status: 'Not Found'});
        }
        res.status(200).json({data: result})
    })
})


module.exports = router;