const http = require('http');

const server = http.createServer();

server.on('request', function (req, res) {
  if (req.url === '/') res.end('Welcome');
  else if (req.url === '/about') res.end('A short history about us');
});

server.listen(3000);
