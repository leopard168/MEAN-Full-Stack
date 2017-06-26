// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// routes will go here
app.get('/api/users', function(req, res) {
  var user_id = req.param('id');
  var token = req.param('token');
  var name = req.param('name');  

  res.send('id='+user_id + ' ' + 'token='+token + ' ' + 'name='+name);
});





// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

