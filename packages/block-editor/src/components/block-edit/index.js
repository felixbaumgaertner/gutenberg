/**
 * Internal dependencies
 */
import Edit from './edit';
import {
	BlockClientIdProvider,
	useBlockEditContext,
	useOnCaretVerticalPositionChange,
} from './context';

export { useBlockEditContext, useOnCaretVerticalPositionChange };

export default function BlockEdit( props ) {
	return (
		<BlockClientIdProvider value={ props.clientId }>
			<Edit { ...props } />
		</BlockClientIdProvider>
	);
}
