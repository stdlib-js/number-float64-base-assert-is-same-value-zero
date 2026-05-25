/** @license Apache-2.0 */

'use strict';

/**
* Test if two double-precision floating-point numbers are the same value.
*
* @module @stdlib/number-float64-base-assert-is-same-value-zero
*
* @example
* var isSameValueZero = require( '@stdlib/number-float64-base-assert-is-same-value-zero' );
*
* var bool = isSameValueZero( 3.14, 3.14 );
* // returns true
*
* bool = isSameValueZero( -0.0, -0.0 );
* // returns true
*
* bool = isSameValueZero( -0.0, 0.0 );
* // returns true
*
* bool = isSameValueZero( NaN, NaN );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
