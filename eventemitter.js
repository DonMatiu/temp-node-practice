const EventEmitter = require('events');

const customEmitter = new EventEmitter();

const response = 'response';
const attack = 'attack';

customEmitter.on(response, function () {
  console.log(`${response} received`);
});
customEmitter.on(attack, function (attackPower, attackSpeed) {
  console.log(`${attack} executed with power ${attackPower} and speed: ${attackSpeed}`);
});

customEmitter.emit(response);
customEmitter.emit(attack, '34', 'Super Fast');
