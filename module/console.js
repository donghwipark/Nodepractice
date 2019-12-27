const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key : 'value',
        },
    },
};

console.time( 'total time' );
console.log( 'normal console.log ' );
console.log( string, number, boolean );
console.error( 'error on the error' );

console.dir( obj, { colors : false, depth : 1 } );
console.dir( obj, { colors : true, depth : 2 } );

console.time( 'check time' );
for (let i = 0; i < 10000 ; i++ ) {
    continue;
}
console.timeEnd( 'check time' );

function b () {
    console.trace( 'error location trace' );
}
function a () {
    b();
}
console.timeEnd( 'total time' );