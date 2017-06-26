var http = require('http');

var app =http.createServer(function(request,response){
 	response.writeHead(200,{"Content-Type":"text/plain"});
 	response.end("Hello world!");
 });
 //start creatServer
 var server = app.listen(3000,function(){
 	console.log('Server listening at http://'+
 		server.address().address+':'+server.address().port);
 });

