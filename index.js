var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

var cats = require('./cats.js')(app);
//app.get('/', function (res, req) {
//    res.send();
//})

var server = app.listen(3000,function(){
    console.log();
})