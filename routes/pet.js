/**
 * Created by Hernan Y.Ke on 2016/4/12.
 */
var r = require('request').defaults({
    json:true
});
var async = require('async');

module.exports = function(app){
    app.get('/pets',function(req,res){
        async.parallel({
            cat: function (cb) {

            r({uri:'http://localhost:3000/cat'},function(error, response, body){
                if(error){
                    cb({service:'cat',error:error});
                    return;
                }
                if (!error && response.statusCode == 200) {
                    cb(null,body);
                } else {
                    cb(response.statusCode);
                }
            });
    },
      dog:function(cb) {
          r({uri: 'http://localhost:3001/dog'}, function (error, response, body) {
              if(error){
                  cb({service:'dog',error:error});
                  return;
              }
              if (!error && response.statusCode == 200) {
                  cb(null,body);
              } else {
                  cb(response.statusCode);
              }
          })
      }
    },
        function(error,results){
            var y;
            for(var x=0;x<10000;x++){
                y=y+x;
            }
            res.json({
                error:error,
                reaults:results
            })
        });
    })
    app.get('/ping',function(req,res){
        res.json({pong:Date.now()});
    })
}