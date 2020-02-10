const fs = require('fs');

fs.readdir('./folder', (err, dir) => {
    if (err) {
        throw err;
    }
    console.log('check the folder', dir);
    fs.unlink('./folder/newFile.js', (err) => {
        if (err) {
            throw err;
        }
        console.log('Successfully delete the file');
        fs.rmdir('./folder', (err) => {
            if (err) {
                throw err;
            }
            console.log('successfully delete folder.');
        });
    });
});