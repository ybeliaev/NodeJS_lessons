var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

//Start your command line interface, write node myfirst.js and hit enter:
//
//D:\myWorks\NodeJS_lessons>node myfirst.js