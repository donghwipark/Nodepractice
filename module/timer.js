const timeout = setTimeout( () => {
    console.log( 'active after 1.5s' );
}, 1500);

const interval = setInterval( () => {
    console.log( 'active every 1s' );
}, 1000);

const timeout2 = setTimeout( () => {
    console.log( 'not active' );
}, 3000);

setTimeout( () => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate( () => {
    console.log( 'immediately active' );
});

const immediate2 = setImmediate( () => {
    console.log( 'not active' );
});

clearImmediate(immediate2);