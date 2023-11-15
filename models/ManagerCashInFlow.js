const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CashInflowSchema = mongoose.Schema({
  partyName: String,
  transactionType: String,
  transactionDate: String,
  amount: Number,
  remarks: String
})
CashInflowSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('manager-cashinflow', CashInflowSchema)