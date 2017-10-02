const mongoose = require('mongoose');
// create url for database
const mongoURL = "mongodb://zsy:Zsy940920@ds139994.mlab.com:39994/cbdb";
mongoose.connect(mongoURL, { useMongoClient: true});
var db = mongoose.connection
db.on('error', (err) => {
    console.error('connection err', err);
})
db.once('open', function () {
    console.log('Mongodb connection open');
})

module.export = db;