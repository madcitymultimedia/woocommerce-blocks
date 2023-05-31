/**
 * External dependencies
 */
import {
	CartEventsProvider,
	useCartEventsContext,
} from '@woocommerce/base-context';
import { useEffect } from '@wordpress/element';
import { render, screen, waitFor } from '@testing-library/react';

/**
 * Internal dependencies
 */
import Block from '../block';

describe( 'Mini Cart Checkout Button Block', () => {
	it( 'dispatches the onProceedToCheckout event when the button is clicked', async () => {
		Object.defineProperty( window, 'location', {
			writable: true,
			value: { assign: jest.fn() },
		} );
		const mockObserver = jest.fn().mockReturnValue( { type: 'error' } );
		const MockObserverComponent = () => {
			const { onProceedToCheckout } = useCartEventsContext();
			useEffect( () => {
				return onProceedToCheckout( mockObserver );
			}, [ onProceedToCheckout ] );
			return <div>Mock observer</div>;
		};

		render(
			<CartEventsProvider>
				<div>
					<MockObserverComponent />
					<Block
						checkoutButtonLabel={ 'Proceed to Checkout' }
						className="test-block"
					/>
				</div>
			</CartEventsProvider>
		);
		expect( screen.getByText( 'Mock observer' ) ).toBeInTheDocument();
		const button = screen.getByText( 'Proceed to Checkout' );
		button.click();
		await waitFor( () => {
			expect( mockObserver ).toHaveBeenCalled();
		} );
	} );
} );
