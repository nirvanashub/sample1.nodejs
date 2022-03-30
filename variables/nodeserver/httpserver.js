// HTTP 200
// The HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default. 
// The meaning of a success depends on the HTTP request method: GET : 
// The resource has been fetched and is transmitted in the message body.
// 18-Feb-2022

/*The HTTP 300 Multiple Choices redirect status response code indicates that the request has more than one possible responses. 
he user-agent or the user should choose one of them. As there is no standardized way of choosing one of the responses, t
his response code is very rarely used.*/

/*The HyperText Transfer Protocol (HTTP) 400 Bad Request response status code indicates that the server cannot or will not 
process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid 
request message framing, or deceptive request routing).*/

const http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   console.log(request);
   response.writeHead(200
    , {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World in nodejs\n');
}).listen(8086);

// Console will print the message
console.log('Server running at http://127.0.0.1:8086/');