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
		'./packages/stylelint-config/test/functions-valid.css',
		'utf-8'
	),
	invalidCss = fs.readFileSync(
		'./packages/stylelint-config/test/functions-invalid.css',
		'utf-8'
	);

describe( 'flags no warnings with valid functions css', () => {
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

describe( 'flags warnings with invalid functions css', () => {
	let result;

	beforeEach( () => {
		result = stylelint.lint( {
			code: invalidCss,
			configBasedir: resolve( __dirname, '..' ),
			config,
		} );
	} );

	it( 'did error', () => {
		return result.then( ( data ) => expect( data.errored ).toBeTruthy() );
	} );

	it( 'flags correct number of warnings', () => {
		return result.then( ( data ) =>
			expect( data.results[ 0 ].warnings ).toHaveLength( 1 )
		);
	} );

	it( 'snapshot matches warnings', () => {
		return result.then( ( data ) =>
			expect( data.results[ 0 ].warnings ).toMatchSnapshot()
		);
	} );
} );
