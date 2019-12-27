const { odd, even } = require( './var' );
const checkNumber = require( './func.js' );

function checkStringOddOrEven ( str ) {
    if ( str.length % 2 ) {
        // ODD
        return odd;
    } else {
        return even;
    }
}

console.log( checkNumber( 10 ) );
console.log( checkStringOddOrEven( 'hello' ) );