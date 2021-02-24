/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { createContext, useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../store';

const Context = createContext();
const { Provider } = Context;

export { Provider as BlockClientIdProvider };

/**
 * A hook that returns the block edit context.
 *
 * @return {Object} Block edit context
 */
export function useBlockEditContext() {
	const clientId = useContext( Context );
	return useSelect(
		( select ) => {
			const { getBlockName, isBlockSelected } = select(
				blockEditorStore
			);
			return {
				clientId,
				name: getBlockName( clientId ),
				isSelected: isBlockSelected( clientId ),
			};
		},
		[ clientId ]
	);
}
