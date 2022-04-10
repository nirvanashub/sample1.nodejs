<<<<<<< HEAD
//creating simple web server
const http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   console.log(request);
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World welcome to nodejs\n');
}).listen(8081);

// Console will print the message
=======
//creating simple web server
const http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   console.log(request);
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World welcome to nodejs\n');
}).listen(8081);

// Console will print the message
>>>>>>> a3339e7df4be0cb7ade162fd9eaa37cc9aaf406c
console.log('Server running at http://127.0.0.1:8081/');