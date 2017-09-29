const express = require('express');
const app = express();

app.use(express.static(__dirname + '/src')); // html
app.use(express.static(__dirname + '/public')); // js, css, images

const server = app.listen(5000);
app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
});