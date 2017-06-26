var express = require('express');
var app = express();

app.get('/user/:id', function(req, res) {
  res.send('user is' + req.params.id);
});

// start server
app.listen(3000, function () {
  console.log('Server is listening');
});

