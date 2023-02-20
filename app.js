const express = require('express'); // express framework

const app = express(); // create express app
const port = 3000; // host on port 3000

app.use(express.static('public')) // make static files in public folder available to each other

app.get('/', function(req, res) { // main page
  res.sendFile('index.html', {root: __dirname}); // render index.html
});

app.listen(port); // start listening
console.log(`Listening on port ${port}`);
