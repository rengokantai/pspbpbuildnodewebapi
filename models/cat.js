/**
 * Created by Hernan Y.Ke on 2016/4/12.
 */
var mongoose = require('mongoose');

var catSchema = mongoose.Schema({
    name:String,
    age:String,
    type:String
});
module.exports = mongoose.model('Cat',catSchema);