var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello world!');
});

// start server
var server = app.listen(3000, function () {
    console.log('Server listening at http://' + 
    	server.address().address + ':' + 
    	server.address().port);
});

