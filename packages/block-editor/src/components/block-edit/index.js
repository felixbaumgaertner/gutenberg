/**
 * Internal dependencies
 */
import Edit from './edit';
import { BlockClientIdProvider, useBlockEditContext } from './context';

export { useBlockEditContext };

export default function BlockEdit( props ) {
	return (
		<BlockClientIdProvider value={ props.clientId }>
			<Edit { ...props } />
		</BlockClientIdProvider>
	);
}
