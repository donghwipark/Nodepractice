const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.write('writing. \n');
writeStream.write('writing again. \n');
writeStream.end();
writeStream.on('finish', () => {
    console.log('file write finish');
});