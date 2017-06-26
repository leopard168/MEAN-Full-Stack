var express = require('express');
var app = express();


 app.get('/', function (req, res) {
   res.send('Hello world!');
 });


// app.get('/api', function(request, response) {
//    response.send({name:"张三",age:20});
// });

var api = require('./routes/api-2');

app.get('/api2', api.index());

// start server
var server = app.listen(3000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
