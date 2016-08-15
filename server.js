'use strict'
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 2345;
const onRequest = require('./router')

const server = http.createServer();

server.listen(port)

server.on('listening', onLinstenig);
server.on('request', onRequest);


// function onRequest(req, res) {
// 	let uri = req.url;

// 	if(uri.startsWith('/index') || uri === '/'){
// 		return serveIndex(res);
// 	}

// 	if( uri === '/app.js'){
// 		return serveApp(res);
// 	}

// 	res.statusCode = 404;
// 	res.end('404 not found');

	// let index = path.join(__dirname, 'public', 'index.html')
	// let rs = fs.createReadStream(index);

	// rs.on('data', function(chunk){
		
	// });

	// res.setHeader('Content-Type', 'text/html');
	// rs.pipe(res);

	// rs.on('error', function(err){
	// 	res.setHeader('Content-Type', 'text/plain');
	// 	res.end(err.message)
	// })

	// fs.readFile(index, function(err, file){
	// 	if(err){
	// 		console.log(err);
	// 	}
	// 	res.end(file)
	// });
	
// }

function serveIndex(res){
	let index = path.join(__dirname, 'public', 'index.html')
	let rs = fs.createReadStream(index);
	res.setHeader('Content-Type', 'text/html');
	rs.pipe(res);

	rs.on('error', function(err){
		res.setHeader('Content-Type', 'text/plain');
		res.end(err.message)
	})
}

function serveApp(res){
	let app = path.join(__dirname, 'public', 'app.js')
	let rs = fs.createReadStream(app);
	res.setHeader('Content-Type', 'text/javascript');
	rs.pipe(res);

	rs.on('error', function(err){
		res.setHeader('Content-Type', 'text/plain');
		res.end(err.message)
	})
}



function onLinstenig(){
	console.log('Server Running at por ' + port);
}