//requirements
const APIAI_TOKEN = process.env.APIAI_TOKEN;
const APIAI_SESSION_ID = process.env.APIAI_SESSION_ID
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const db = require('../db/dbconfig.js');
const Message = require('../db/msg.js')
const mongoose = require('mongoose');
// const router = express.Router();
// const axios = require('axios')
//app initialization
const app = express();
//middleware
app.use(bodyparser.json());
app.use(express.static(client));
const client = path.resolve(__dirname,  '../client')
const myMessage = ''
var port = process.env.PORT || 4568;
app.listen(port);
console.log('Server now listening ' + port);
const io = require('socket.io')(port);
io.on('connection', function(socket){
  console.log('a user connected');
});
console.log(client);
const apiai = require('apiai')(APIAI_TOKEN);
//routes
//init server

io.on('connection', function(socket) {
    socket.on('chat message', (text) => {
  
      // Get a reply from API.AI
  
      let apiaiReq = apiai.textRequest(text, {
        sessionId: APIAI_SESSION_ID
      });
  
      apiaiReq.on('response', (response) => {
        let aiText = response.result.fulfillment.speech;
        socket.emit('bot reply', aiText); // Send the result back to the browser!
      });
  
      apiaiReq.on('error', (error) => {
        console.log(error);
      });
  
      apiaiReq.end();
  
    });
  });


    // res.send({receivedMsg: req.body.message})
    // req.body is 'hello'
//    var Msg = new Message();
//    Msg.message = req.body.message;

// create
// delete
// update
// find
// findone
   
//    Msg.save(function(err,result) {
//        if(err)  console.error('Error Saving Message to Db');
//     //    res.send({message: result.message})
//    })
//    axios({
//     method: "POST",
//     url: 'https://api.api.ai/v1/query?v=20150910',
//      headers: {'Authorization': 'Bearer 075b6b823ceb4cb48fbb57dbb701ea7d', 
//   'Content-Type' : 'application/json'},
//   data: {
//     "query": req.body.message,
//     "contexts": [{
//         "name": "weather",
//         "lifespan": 4
//     }],
//     "location": {
//         "latitude": 37.459157,
//         "longitude": -122.17926
//     },
//     "timezone": "America/New_York",
//     "lang": "en",
//     "sessionId": "1234567890"
// },
//    })
// .then(function(response) {
//     console.log(response.data.result.fulfillment.speech)
//     res.send(response.data.result.fulfillment.speech);
// })

// })
// app.get('/message',(req, res) => {
//     console.log('Trying to get')
// Message.find({}, function(err, msg) {
//     if(err) console.err('Not Finding the Message'); 
//     console.log(msg)
//     res.send(msg.data)
// })
// })
// app.get('/message',(req, res)=> {
//     var query = req.body.Msg
//     method:"POST"
//     url: ,
//     headers: [
//     ]
//     data: {

//     }
// })
// axios.get('/', {
//     params: {
//       ID: '075b6b823ceb4cb48fbb57dbb701ea7d'
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// router.get('/', function(req,res) {
//     res.json({message: 'API initilized'})
// });
// app.use('/api', router);
// router.route('/app').get(function(req, res) {
//     Message.find(function(res,req) {
//         if(err) {
//             res.send(err);
//         }
//         res.json(Message)
// Message.find
//     }
// }

module.exports = app;