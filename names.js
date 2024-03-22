const peter = 'Peter';
const james = 'James';
module.exports.inventory = [
  ['cow', 3],
  ['horse', 53],
  ['chicken', 69],
];

const grass = {
  type: 'oriental',
  color: 'green',
  length: 'short',
};

module.exports.grass = grass;
module.exports.names = { peter, james };
require('./function');
