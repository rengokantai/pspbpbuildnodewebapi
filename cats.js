/**
 * Created by Hernan Y.Ke on 2016/4/12.
 */
var _ = require('lodash');

module.exports = function(app) {

    _cats = [];
    app.post('/cat', function (req, res) {
        _cats.push(req.body);
        res.json({mes: 'success'});
    })

    app.get('/cat', function (req, res) {
        res.send(_cats);
    })

    app.get('/cat/:id', function (req, res) {
        res.send(
            _.find(
                _cats,
                {name: req.params.id}
            )
        );
    })

    app.put('/cat/:id', function (req, res) {
        var index = _.findIndex(
            _cats,
            {
                name: req.params.id
            }
        );
        _.merge(_cats[index], req.body);
        res.json({mes: 'update success'});
    })

    app.delete('/cat/:id', function (req, res) {
        _.remove(_cats,function(cat){
            return cat.name === req.params.id;
        })
        res.json({mes: 'delete success'});
    })

};