/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { DISPLAY_CART_PRICES_INCLUDING_TAX } from '@woocommerce/block-settings';
import {
	ShippingCalculator,
	ShippingLocation,
} from '@woocommerce/base-components/cart-checkout';
import PropTypes from 'prop-types';
import { useState } from '@wordpress/element';
import { useShippingRates } from '@woocommerce/base-hooks';

/**
 * Internal dependencies
 */
import TotalsItem from '../totals-item';
import ShippingRateSelector from './shipping-rate-selector';
import hasShippingRate from './has-shipping-rate';
import './style.scss';

/**
 * Renders the shipping totals row, rates, and calculator if enabled.
 */
const TotalsShippingItem = ( {
	currency,
	values,
	isCheckout = false,
	showCalculator = true,
	showRatesWithoutAddress = false,
} ) => {
	const [ isShippingCalculatorOpen, setIsShippingCalculatorOpen ] = useState(
		false
	);
	const defaultAddressFields = [ 'country', 'state', 'city', 'postcode' ];
	const {
		shippingRates,
		shippingAddress,
		shippingRatesLoading,
		hasShippingAddress,
		setShippingAddress,
	} = useShippingRates();
	const totalShippingValue = DISPLAY_CART_PRICES_INCLUDING_TAX
		? parseInt( values.total_shipping, 10 ) +
		  parseInt( values.total_shipping_tax, 10 )
		: parseInt( values.total_shipping, 10 );
	const hasRates = hasShippingRate( shippingRates ) || totalShippingValue;
	const showingRates = showRatesWithoutAddress || hasShippingAddress;

	// If we have no rates, and an address is needed.
	if ( ! hasRates && ! hasShippingAddress && ! isCheckout ) {
		return (
			<TotalsItem
				label={ __( 'Shipping', 'woo-gutenberg-products-block' ) }
				value={
					showCalculator ? (
						<button
							className="wc-block-totals__change-address-button"
							onClick={ () => {
								setIsShippingCalculatorOpen(
									! isShippingCalculatorOpen
								);
							} }
						>
							{ __(
								'Calculate',
								'woo-gutenberg-products-block'
							) }
						</button>
					) : (
						<em>
							{ __(
								'Calculated during checkout',
								'woo-gutenberg-products-block'
							) }
						</em>
					)
				}
				description={
					<>
						{ showCalculator && isShippingCalculatorOpen && (
							<ShippingCalculator
								onUpdate={ ( newAddress ) => {
									setShippingAddress( newAddress );
									setIsShippingCalculatorOpen( false );
								} }
								address={ shippingAddress }
								addressFields={ defaultAddressFields }
							/>
						) }
					</>
				}
			/>
		);
	}

	return (
		<>
			<TotalsItem
				label={ __( 'Shipping', 'woo-gutenberg-products-block' ) }
				value={ totalShippingValue ? totalShippingValue : '' }
				description={
					<>
						<ShippingLocation address={ shippingAddress } />{ ' ' }
						{ showCalculator && (
							<button
								className="wc-block-totals__change-address-button"
								onClick={ () => {
									setIsShippingCalculatorOpen(
										! isShippingCalculatorOpen
									);
								} }
							>
								{ __(
									'(change address)',
									'woo-gutenberg-products-block'
								) }
							</button>
						) }
						{ showCalculator && isShippingCalculatorOpen && (
							<ShippingCalculator
								onUpdate={ ( newAddress ) => {
									setShippingAddress( newAddress );
									setIsShippingCalculatorOpen( false );
								} }
								address={ shippingAddress }
								addressFields={ defaultAddressFields }
							/>
						) }
					</>
				}
				currency={ currency }
			/>
			{ ! isCheckout && showingRates && (
				<ShippingRateSelector
					hasRates={ hasRates }
					shippingRates={ shippingRates }
					shippingRatesLoading={ shippingRatesLoading }
				/>
			) }
		</>
	);
};

TotalsShippingItem.propTypes = {
	currency: PropTypes.object.isRequired,
	values: PropTypes.shape( {
		total_shipping: PropTypes.string,
		total_shipping_tax: PropTypes.string,
	} ).isRequired,
	isCheckout: PropTypes.bool,
	showCalculator: PropTypes.bool,
	showRatesWithoutAddress: PropTypes.bool,
};

export default TotalsShippingItem;
