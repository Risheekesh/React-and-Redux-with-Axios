var express =require('express');
var app=express();
var nunjucks=require('nunjucks');
var path = require('path');

nunjucks.configure( '.', {
    express: app,
    noCache:true
} );


app.use('/static', express.static(path.join(__dirname, '/public')));


app.get('/getSimpleData',function(req,res){
	res.send([1,2,3,4,5]);
})

















app.get('/*',function(req,res) {
	console.log("default route=======");
	res.render('./public/views/index.html')
})


console.log("start app")

app.listen((process.env.PORT || 5000));
