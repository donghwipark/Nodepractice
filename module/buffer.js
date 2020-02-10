const buffer = Buffer.from('please change me to buffer');
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [Buffer.from('skipping '), Buffer.from('skipping '), Buffer.from('skipping ')];
const buffer2 = Buffer.concat(array);
console.log(buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log(buffer3);