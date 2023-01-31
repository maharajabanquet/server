const mongoose = require('mongoose');


const InventorySchema = mongoose.Schema({
    itemName: {
        type: String
    },
    quantity: {
        type: Number
    },
    itemCode: {
        type: String
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('inventory', InventorySchema);
