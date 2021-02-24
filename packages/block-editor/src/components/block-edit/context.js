/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { createContext, useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../store';

const BlockClientId = createContext();
const { Provider: BlockClientIdProvider } = BlockClientId;

/**
 * A hook that returns the block edit context.
 *
 * @return {Object} Block edit context
 */
export function useBlockEditContext() {
	const clientId = useContext( BlockClientId );
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

const OnCaretVerticalPositionChange = createContext();
const {
	Provider: OnCaretVerticalPositionChangeProvider,
} = OnCaretVerticalPositionChange;

export function useOnCaretVerticalPositionChange() {
	return useContext( OnCaretVerticalPositionChange );
}

export { BlockClientIdProvider, OnCaretVerticalPositionChangeProvider };
