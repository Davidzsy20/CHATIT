var mongoose = require('mongoose');

var messageSchema = mongoose.Schema( {
    meg: {type: String, required: true, index:{unique: true}}
});
var Msg = mongoose.model('Msg', messageSchema)
module.exports = Msg;