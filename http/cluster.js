const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master process ID: ${cluster.isMaster}`);
    // Produce worker based on number of CPU
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    // On end of worker
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}'s worker has closed.`);
        cluster.fork();
    });
} else {
    // worker stop on port
    http.createServer((req, res) => {
        res.write('<h1>Hello Node!</h1>');
        res.end('<h1>Hello Cluster!</h1>');
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }).listen(8080);

    console.log(`start ${process.pid}'s worker`);
}