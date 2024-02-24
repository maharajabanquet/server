const mongoose = require('mongoose');

const AppCashFlow = mongoose.Schema({
  title: String,
  cdt: String,
  amount: Number,
  transType: String,
  description: String,
  })

module.exports = mongoose.model('appcashflow', AppCashFlow)