var db = require('./dbconfig');
var mongoose = require('mongoose');
var Schema = mongoose.Schema
var msgSchema = new Schema( {
    myMessage: String, 
    botMessage: String
})
var Message = mongoose.model('Message', msgSchema)
module.exports = Message