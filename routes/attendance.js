const express = require('express');
const Attendance = require('../models/attendance');

const router = express.Router();


router.post('/mark-absent', (req, res) => {
    const toPut = {
        employeeName: req.body.employeeName,
        absentDate: req.body.absentDate,
        reason: req.body.reason,
        typeColor: req.body.typeColor

    }
    const docs = new Attendance(req.body);
    console.log(docs)
    docs.save(req.body).then(resolve => {
        res.status(200).json({'status': 'success'});
    }).catch(err => {
        // console.log(err);
        res.status(503).json({'error': 'Internal Server Error'})
    })
})

router.get('/get-attendance', (req, resp) => {
    Attendance.find({}, function(err, res) {
        resp.status(200).json({'attendance': res});
    })
})

module.exports = router;