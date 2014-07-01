flow-stringify
==============

Thin wrapper for [JSONStream](https://github.com/dominictarr/JSONStream) stringify.


## Installation

``` bash
$ npm install flow-stringify
```


## Examples

``` javascript
// Flow stringify generator:
var sStream = require( 'flow-stringify' );

// Create a new stream, passing along an optional error handler:
var stream = sStream()
	.stream( onError );

// Add a listener:
stream.on( 'data', function( data ) {
	console.log( JSON.stringify( data ) );
});

// Write data to the stream:
stream.write( { 'x': 0, 'y': 0 } );
stream.end();

// Error handler:
function onError( error ) {
	if ( error ) {
		console.error( error.stack );
		throw new Error( 'Error!!!' );
	}
}
```

## Tests

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions.

Assuming you have installed Mocha, execute the following command in the top-level application directory to run the tests:

``` bash
$ mocha
```

All new feature development should have corresponding unit tests to validate correct functionality.


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.

