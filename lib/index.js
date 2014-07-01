/**
*
*	STREAM: JSON stringify
*
*
*	DESCRIPTION:
*		- Provides a transform stream wrapper around Dominic Tarr's JSONstream module and its stringify functionality. Provides a consistent API with other flow streams.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	HISTORY:
*		- 2014/05/11: Created. [AReines].
*
*
*	DEPENDENCIES:
*		[1] JSONStream
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. athan@nodeprime.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var // Module to stream JSON objects:
		JSONStream = require( 'JSONStream' );
		

	// STREAM //

	/**
	* FUNCTION: Stream()
	*	Stream constructor.
	*
	* @constructor
	* @returns {stream} Stream instance
	*/
	function Stream() {
		return this;
	} // end FUNCTION stream()

	/**
	* METHOD: stream( clbk )
	*	Returns a transform stream to stringify data as a JSON array.
	* 
	* @param {function} clbk - (optional) callback to invoke in the event of errors. Function should take one input argument: [ error ]. If no errors, error is null.
	* @returns {stream} JSON stream stringifier
	*/
	Stream.prototype.stream = function( clbk ) {
		var stream = JSONStream.stringify( '[\n\t', ',\n\t', '\n]\n' );
		stream.on( 'error', function onError( error ) {
			if ( clbk ) {
				clbk ( error );
				return;
			}
			console.error( error.stack );
		});
		return stream;
	}; // end METHOD stream()


	// EXPORTS //

	module.exports = function createStream() {
		return new Stream();
	};

})();