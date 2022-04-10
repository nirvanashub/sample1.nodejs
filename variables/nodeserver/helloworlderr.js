<<<<<<< HEAD
// creating a simple web server
// request - is something goging from the client/user to the server, it contains details for which you want action to be performed
// response - once the request is processed the data what u get will be given back by server as a response.

const http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   console.log(request);
   response.writeHead(401
    , {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World in nodejs\n');
}).listen(8086);

// Console will print the message
console.log('Server running at http://127.0.0.1:8086/');


// prepare notes on the http status codes
// 200 -
// 300
// 400
=======
// creating a simple web server
// request - is something goging from the client/user to the server, it contains details for which you want action to be performed
// response - once the request is processed the data what u get will be given back by server as a response.

const http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   console.log(request);
   response.writeHead(401
    , {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World in nodejs\n');
}).listen(8086);

// Console will print the message
console.log('Server running at http://127.0.0.1:8086/');


// prepare notes on the http status codes
// 200 -
// 300
// 400
>>>>>>> a3339e7df4be0cb7ade162fd9eaa37cc9aaf406c
// 500