console.clear();
const { error } = require('console');
const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', function (req, res) {
  const fileStream = fs.createReadStream('./content/bigtext.txt', {
    highWaterMark: 10,
    encoding: 'utf8',
  });
  fileStream.on('open', function () {
    fileStream.pipe(res);
  });
  fileStream.on('error', function () {
    res.end(error);
  });
});

server.listen(3000);
