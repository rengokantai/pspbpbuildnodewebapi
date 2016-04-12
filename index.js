var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect(process.env.LINK);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

var cats = require('./cat_routes.js')(app);
//app.get('/', function (res, req) {
//    res.send();
//})

var server = app.listen(3000,function(){
    console.log();
})