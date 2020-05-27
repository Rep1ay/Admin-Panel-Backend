const mongoose = require('mongoose')

const Schema = mongoose.Schema
const newsMembersSchemat = new Schema({
    userId: String,
    customerName: String
})

module.exports = mongoose.model('customers_data', newsMembersSchemat, 'customers')