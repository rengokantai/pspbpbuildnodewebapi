/**
 * Created by Hernan Y.Ke on 2016/4/12.
 */
var r = require('request').defaults({
    json:true
});
var async = require('async');
var redis = require('redis');
var client = redis.createClient(6379,'localhost');

module.exports = function(app){
    app.get('/pets', function (req, res) {
    async.parallel({
        cat: function(cb){
            r({uri: 'http://localhost:3000/cat'}, function(error, response, body) {
                if (error) {
                    cb({service: 'cat', error: error});
                    return;
                };
                if (!error && response.statusCode === 200) {
                    cb(null, body.data);
                } else {
                    cb(response.statusCode);
                }
            });
        },
        dog: function(cb){
            client.get('http://localhost:3001/dog', function(error, dog) {
                if (error) {throw error;};
                if (dog) {
                    cb(null, JSON.parse(dog));
                } else {

                    r({uri: 'http://localhost:3001/dog'}, function(error, response, body) {
                        if (error) {
                            cb({service: 'dog', error: error});
                            return;
                        };
                        if (!error && response.statusCode === 200) {
                            cb(null, body.data);
                             client.set('http://localhost:3001/dog', JSON.stringify(body.data), function (error) {
                            //client.setex('http://localhost:3001/dog', 10, JSON.stringify(body.data), function (error) {
                                if (error) {throw error;};
                            });
                        } else {
                            cb(response.statusCode);
                        }
                    });

                }
            });

        }
        },
        function(error, results) {
            res.json({
                error: error,
                results: results
            });
        });

});

app.get('/ping', function (req, res) {
    res.json({pong: Date.now()});
});

};