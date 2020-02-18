const http = require('http');

const server = http.createServer((req,res) => {
    res.write('<h1>hello world</h1>');
    res.end('<p>hello world</p>');
})

server.listen(8080);
server.on('listening', () => {
    console.log('Server is waiting in 8080 port');
});
server.on('error', () => {
    console.error('error');
});