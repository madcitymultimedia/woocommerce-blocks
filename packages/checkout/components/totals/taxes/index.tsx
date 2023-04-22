/**
 * External dependencies
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { getSetting } from '@woocommerce/settings';
import type { Currency } from '@woocommerce/price-format';
import type { CartTotalsTaxLineItem } from '@woocommerce/types';
import type { ReactElement } from 'react';
import { CART_STORE_KEY, CHECKOUT_STORE_KEY } from '@woocommerce/block-data';
import { useSelect } from '@wordpress/data';
import {
	areShippingMethodsMissing,
	hasShippingRate,
} from '@woocommerce/base-components/cart-checkout/totals/shipping/utils';

/**
 * Internal dependencies
 */
import TotalsItem from '../item';

interface Values {
	tax_lines: CartTotalsTaxLineItem[];
	total_tax: string;
}

export interface TotalsTaxesProps {
	className?: string;
	currency: Currency;
	showRateAfterTaxName: boolean;
	values: Values | Record< string, never >;
}

const TotalsTaxes = ( {
	currency,
	values,
	className,
	showRateAfterTaxName,
}: TotalsTaxesProps ): ReactElement | null => {
	let { total_tax: totalTax, tax_lines: taxLines } = values;

	const { cartData, prefersCollection } = useSelect( ( select ) => {
		return {
			cartData: select( CART_STORE_KEY ).getCartData(),
			prefersCollection: select( CHECKOUT_STORE_KEY ).prefersCollection(),
		};
	} );
	const { shippingRates } = cartData;
	const hasRates = hasShippingRate( shippingRates );
	const shippingMethodsMissing = areShippingMethodsMissing(
		hasRates,
		prefersCollection,
		shippingRates
	);

	if ( shippingMethodsMissing ) {
		taxLines = taxLines.filter(
			( { is_shipping: isShipping } ) => ! isShipping
		);
	}
	if (
		! getSetting( 'taxesEnabled', true ) &&
		parseInt( totalTax, 10 ) <= 0
	) {
		return null;
	}

	const showItemisedTaxes = getSetting(
		'displayItemizedTaxes',
		false
	) as boolean;

	const itemisedTaxItems: ReactElement | null =
		showItemisedTaxes && taxLines.length > 0 ? (
			<>
				{ taxLines.map( ( { name, rate, price }, i ) => {
					const label = `${ name }${
						showRateAfterTaxName ? ` ${ rate }` : ''
					}`;
					return (
						<TotalsItem
							key={ `tax-line-${ i }` }
							className={ classnames(
								'wc-block-components-totals-taxes',
								className
							) }
							currency={ currency }
							label={ label }
							value={ parseInt( price, 10 ) }
						/>
					);
				} ) }{ ' ' }
			</>
		) : null;

	return showItemisedTaxes ? (
		itemisedTaxItems
	) : (
		<>
			<TotalsItem
				className={ classnames(
					'wc-block-components-totals-taxes',
					className
				) }
				currency={ currency }
				label={ __( 'Taxes', 'woo-gutenberg-products-block' ) }
				value={ parseInt( totalTax, 10 ) }
				description={ null }
			/>
		</>
	);
};

export default TotalsTaxes;
