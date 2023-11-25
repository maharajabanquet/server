const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CashInflowSchema = mongoose.Schema({
  name: String,
  transactionType: String,
  transactionDate: {type: Date},
  amount: Number,
  remarks: String,
  is_booking: Boolean,
  cdt: {type: Date, default: Date.now},
})
CashInflowSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('cashinflow2024_2025', CashInflowSchema)