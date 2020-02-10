process.on('uncaughtException', (err) => {
    console.error('unexpected error', err);
})

setInterval(() => {
    throw new Error('Ill broke the server');
}, 1000);

setTimeout(() => {
    console.log('playing');
}, 2000);
