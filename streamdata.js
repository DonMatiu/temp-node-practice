console.clear();
const fs = require('fs');

const stream = fs.createReadStream('./content/bigtext.txt', {
  highWaterMark: 134446,
  encoding: 'utf8',
});

stream.on('data', function (result) {
  console.log(result);
});

stream.on('error', function (error) {
  console.log(error);
});
