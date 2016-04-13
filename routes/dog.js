/**
 * Created by Hernan Y.Ke on 2016/4/12.
 */
var _ = require('lodash');
var Dog = require('../models/dog.js');

module.exports = function(app) {
    app.post('/dog', function (req, res) {
        var newDog = new Dog(req.body);
        newDog.save(function(err){
            if(err){
                res.json({mes: 'error'});
            }
            res.json({mes: 'success'});
        })

    })

    app.get('/dog', function (req, res) {
        Dog.find(function(err,dogs){
            if(err){
                res.json({mes: 'error'});
            }
            setTimeout(function() {
                res.json({mes: 'success', data: dogs});
            },5000);
        })
    })
    app.get('/dog/:id', function (req, res) {
        Dog.findById(req.params.id,function(err,dog){
            if(err){
                res.json({mes: 'error'});
            }
            if(dog){
                res.json({mes: 'suc',data:dog});
            }
            res.json({mes: 'not found'});
        })
    })

    app.put('/dog/:id', function (req, res) {
        Dog.findById(req.params.id,function(err,dog){
            if(err){
                res.json({mes: 'error'});
            }
            if(dog){
                _.merge(dog,req.body);
                dog.save(function(err){
                    if(err){
                        res.json({mes: 'error'});
                    }
                    res.json({mes: 'suc'});
                })
                res.json({mes: 'not found'});
            }
        })
    })

    app.delete('/dog/:id', function (req, res) {
        Dog.findByIdAndRemove(req.params.id,function(err){
            if(err){
                res.json({mes:'error'})
            }
            res.json({mes:'suc'});
        })
    })

};