/**
 * Created by Hernan Y.Ke on 2016/4/12.
 */
var _ = require('lodash');
var Cat = require('../models/cat.js');

module.exports = function(app) {
    //In browser
    //_cats = [];
    //app.post('/cat', function (req, res) {
    //    _cats.push(req.body);
    //    res.json({mes: 'success'});
    //})
    //
    //app.get('/cat', function (req, res) {
    //    res.send(_cats);
    //})
    //
    //app.get('/cat/:id', function (req, res) {
    //    res.send(
    //        _.find(
    //            _cats,
    //            {name: req.params.id}
    //        )
    //    );
    //})
    //
    //app.put('/cat/:id', function (req, res) {
    //    var index = _.findIndex(
    //        _cats,
    //        {
    //            name: req.params.id
    //        }
    //    );
    //    _.merge(_cats[index], req.body);
    //    res.json({mes: 'update success'});
    //})
    //
    //app.delete('/cat/:id', function (req, res) {
    //    _.remove(_cats,function(cat){
    //        return cat.name === req.params.id;
    //    })
    //    res.json({mes: 'delete success'});
    //})

    app.post('/cat', function (req, res) {
        var newCat = new Cat(req.body);
        newCat.save(function(err){
            if(err){
                res.json({mes: 'error'});
            }
            res.json({mes: 'success'});
        })

    })

    app.get('/cat', function (req, res) {
        Cat.find(function(err,cats){
        if(err){
            res.json({mes: 'error',data:cats});
        }
        res.json({mes: 'success',data:cats});
    })
    })
    app.get('/cat/:id', function (req, res) {
       Cat.findById(req.params.id,function(err,cat){
           if(err){
               res.json({mes: 'error'});
           }
           if(cat){
               res.json({mes: 'suc',data:cat});
           }
           res.json({mes: 'not found'});
       })
    })

    app.put('/cat/:id', function (req, res) {
        Cat.findById(req.params.id,function(err,cat){
            if(err){
                res.json({mes: 'error'});
            }
            if(cat){
                _.merge(cat,req.body);
                cat.save(function(err){
                    if(err){
                        res.json({mes: 'error'});
                    }
                    res.json({mes: 'suc'});
                })
                res.json({mes: 'not found'});
            }
        })
    })

    app.delete('/cat/:id', function (req, res) {
        Cat.findByIdAndRemove(req.params.id,function(err){
            if(err){
                res.json({mes:'error'})
            }
            res.json({mes:'suc'});
        })
    })

};