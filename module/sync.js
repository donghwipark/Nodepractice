const fs = require('fs');

console.log('start');
let data = fs.readFileSync('./readme2.txt');
console.log('one', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('two', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('three', data.toString());
console.log('end');