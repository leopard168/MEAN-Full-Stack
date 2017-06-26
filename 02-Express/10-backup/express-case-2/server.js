
var express = require('express');
var bodyParser=require('body-parser');

var app=express();

app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended:true}));

app.post('/urlencode',function(req,res){
    console.log(req.body);
    res.send("success");
});


app.use("/",function(req, res){
	res.sendFile('index.html');
})


// start server
var server = app.listen(3000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});

