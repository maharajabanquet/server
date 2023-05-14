const express = require('express');
const AppUser = require('../models/AppUser');

const router = express.Router();

router.post('/login', (req, res) => {
    mobile = req.body.mobile;
    password = req.body.password;
    console.log(mobile);
    console.log(password);

    AppUser.findOne({mobile: mobile, password: password}, function(err, result) {
        console.log(result);
        if(!result) {
            res.status(404).json({'user': 'not found'});
            return;
        }
            res.status(200).json({'user': result});
    })
})

router.get('/get-cart', (req, res) => {
    const mobile= req.query.mobile;
    const category = req.query.category;
    console.log(category);
    let result = []
    AppUser.findOne({mobile: mobile}, function(err, result) {
        for(let index=0; index<result.cart.length;index++) {
            if(result.cart[index].category === category) {
                res.status(200).json({'userItem': result.cart[index]})
            }
        }
      

    })
})
router.post('/add-user', (req, res) => {
    const addAppUser = new AppUser(req.body);
    addAppUser.save(req.body).then(data => {
        res.status(200).json({'success': data});
    }).catch(err => {
        res.status(503).json({'error': 'Internal Server Error'})
    })
})

router.post('/update', (req, res) => {
   let toPut = req.body;
   let mobile = req && req.query && req.query.mobile;
   AppUser.findOne({mobile: mobile}, function(err, result) {
   
    for(let index=0; index<result.cart.length;index++) {
        for(let indexx=0; indexx<result.cart[index].categoryList.length; indexx++) {
            if(result.cart[index].categoryList[indexx].itemName === req.body.itemName) {
                result.cart[index].categoryList[indexx].orderQuant = req.body.orderQuant
            }
        }
    }
    AppUser.findOneAndUpdate({mobile: mobile}, {$set: {cart:result.cart }}, function(err, success) {
        res.status(200).json({'msg': 'Ok'})
    })

   })
})

module.exports = router;
