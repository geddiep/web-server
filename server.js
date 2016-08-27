var express = require('express');
var app 	= express();
var PORT 	= 3000;

var middleware = require('./middleware.js');


app.use(middleware.logger);


app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

//about 
//About US

// console.log(__dirname);

app.listen(PORT, function(){
	console.log('server started on port ' + PORT);
});