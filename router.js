const APIAI_TOKEN = '075b6b823ceb4cb48fbb57dbb701ea7d';
const APIAI_SESSION_ID = '63d6e33370c64d4e95633e7cb1874baf';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client')); // html
// app.use(express.static(__dirname + '/public')); // js, css, images

const server = app.listen(process.env.PORT || 4568, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
});

const apiai = require('apiai')(APIAI_TOKEN);

// Web UI
// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// });

io.on('connection', function(socket) {
  socket.on('chat message', (text) => {
    console.log('Message: ' + text);

    // Get a reply from API.ai

    let apiaiReq = apiai.textRequest(text, {
      sessionId: APIAI_SESSION_ID
    });

    apiaiReq.on('response', (response) => {
      let aiText = response.result.fulfillment.speech;
      console.log('Bot reply: ' + aiText);
      socket.emit('bot reply', aiText);
    });

    apiaiReq.on('error', (error) => {
      console.log(error);
    });

    apiaiReq.end();

  });
});