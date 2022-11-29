const mongoose = require('mongoose');

const CashInflowSchema = mongoose.Schema({
  partyName: String,
  transactionType: String,
  transactionDate: String,
  amount: Number,
  remarks: String
})

module.exports = mongoose.model('cashinflow', CashInflowSchema)