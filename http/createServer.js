const http = require('http');

http.createServer((req,res) => {
    res.write('<h1>hello world</h1>');
    res.end('<p>hello world</p>');
}).listen(8080, () => {
    console.log('Server is waiting in 8080 port');
});