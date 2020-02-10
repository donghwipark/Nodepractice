setInterval(() => {
    console.log('start');
    try {
        throw new Error('break the server!!!!')
    } catch (err) {
        console.error(err);
    }
}, 1000);
