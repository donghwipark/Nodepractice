const { odd, even } = require( './var' );

function checkOddOrEven ( num ) {
    if ( num % 2 ) {
        // Odd
        return odd;
    } else {
        return even;
    }
}

module.exports = checkOddOrEven;

// ES6 ES2015
// import { odd, even } from './var';

// function checkOddOrEven ( num ) {
//     if ( num % 2 ) {
//         // Odd
//         return odd;
//     }
//     return even;
// }

// export default checkOddOrEven;

