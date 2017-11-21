var http = require('http')

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World\n')

}).listen(8888)

console.log('server running at http://192.168.20.80:8888/')
