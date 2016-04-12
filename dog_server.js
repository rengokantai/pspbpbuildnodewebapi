/**
 * Created by Hernan Y.Ke on 2016/4/12.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect(process.env.DOG);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

var cats = require('./routes/dog.js')(app);

var server = app.listen(3001,function(){
    console.log();
})