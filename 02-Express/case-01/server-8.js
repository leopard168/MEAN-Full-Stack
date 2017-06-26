var express = require('express');
var app = express();


app.get('/user/?id=1 & name=test', function(req, res) {
  res.send('user id=' + req.query.id + 'user name=' + req.query.name);
});

// start server
app.listen(3000, function () {
  console.log('Server is listening');
});



