//加载所需要的模块
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//路由设置

app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var name = req.body.name;

    res.send('id='+user_id + ' ' + 'token='+token + ' ' + 'name='+name);
});


// 启动服务
app.listen(port);
console.log('Server started! At http://localhost:' + port);

