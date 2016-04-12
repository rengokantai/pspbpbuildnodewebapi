/**
 * Created by Hernan Y.Ke on 2016/4/12.
 */
var r = require('request').default({
    json:true
})

module.exports = function(app){
    app.get('/pets',function(req,res){
        r({uri:'http://localhost:3001/dog'},function(error,response,body){
            if(!error && response.statusCode==200){
                res.json(body);
            }else{
                res.send(response.statusCode);
            }
        })

        r({uri:'http://localhost:3000/cat'},function(error,response,body){
            if(!error && response.statusCode==200){
                res.json(body);
            }else{
                res.send(response.statusCode);
            }
        })
    })
}