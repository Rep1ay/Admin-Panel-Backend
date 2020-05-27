const mongoose = require('mongoose')

const Schema = mongoose.Schema
const newsSchemat = new Schema({
    userId: String,
    userName: String,
    totalTime: Number
})

module.exports = mongoose.model('navigation', newsSchemat, 'navigation')