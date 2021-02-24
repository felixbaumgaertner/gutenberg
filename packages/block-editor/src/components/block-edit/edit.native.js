/**
 * WordPress dependencies
 */
import { withFilters } from '@wordpress/components';
import { getBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { OnCaretVerticalPositionChangeProvider } from './context';

export const Edit = ( props ) => {
	const { name } = props;
	const blockType = getBlockType( name );

	if ( ! blockType ) {
		return null;
	}

	const Component = blockType.edit;

	return (
		<OnCaretVerticalPositionChangeProvider
			value={ props.onCaretVerticalPositionChange }
		>
			<Component { ...props } />
		</OnCaretVerticalPositionChangeProvider>
	);
};

export default withFilters( 'editor.BlockEdit' )( Edit );
