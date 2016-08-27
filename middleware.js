//use module exports to expose

//module.exports = function (){
	//return new Promise(function(resolve,reject){
		var middleware = {
			requireAuthentication: function(req,res,next){
				console.log('private route hit');
				next();
			},
			logger: function (req,res,next){
				//new Date().toString();
				console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
				next();
			} 
		};
	//	resolve(middleware);
	//});	
//}

module.exports = middleware;