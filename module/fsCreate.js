const fs = require('fs');

fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.log('no folder');
            fs.mkdir('./folder', (err) => {
                if (err) {
                    throw err;
                };
                console.log('success making folder');
                fs.open('./folder/file.js', 'w', (err, fd) => {
                    if (err) {
                        throw err;
                    }
                    console.log('successfully made empty file', fd);
                    fs.rename('./folder/file.js', './folder/newfile.js', (err) => {
                        if (err) {
                            throw err;
                        }
                        console.log('successfullt changed the name');
                    });
                });
            });
        } else {
            throw err;
        }
    } else {
        console.log('already folder exist.');
    }
});