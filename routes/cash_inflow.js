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
    CashInflow.paginate({}, {page: Number(req.query.pageNo), limit: Number(req.query.pageSize)}, function(err, result){
        res.status(200).json({'data': result});
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
    })
})

module.exports = router;