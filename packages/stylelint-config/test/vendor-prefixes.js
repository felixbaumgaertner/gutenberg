/**
 * External dependencies
 */
const fs = require( 'fs' ),
	stylelint = require( 'stylelint' ),
	{ resolve } = require( 'path' );

/**
 * Internal dependencies
 */
const config = require( '../' ),
	validCss = fs.readFileSync(
		'./packages/stylelint-config/test/vendor-prefixes-valid.css',
		'utf-8'
	);

describe( 'flags no warnings with valid vendor prefixes css', () => {
	let result;

	beforeEach( () => {
		result = stylelint.lint( {
			code: validCss,
			configBasedir: resolve( __dirname, '..' ),
			config,
		} );
	} );

	it( 'did not error', () => {
		return result.then( ( data ) => expect( data.errored ).toBeFalsy() );
	} );

	it( 'flags no warnings', () => {
		return result.then( ( data ) =>
			expect( data.results[ 0 ].warnings ).toHaveLength( 0 )
		);
	} );
} );
