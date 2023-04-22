/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import classNames from 'classnames';
import { createInterpolateElement } from '@wordpress/element';
import FormattedMonetaryAmount from '@woocommerce/base-components/formatted-monetary-amount';
import { applyCheckoutFilter, TotalsItem } from '@woocommerce/blocks-checkout';
import { useStoreCart } from '@woocommerce/base-context/hooks';
import { getSetting } from '@woocommerce/settings';
import {
	CartResponseTotals,
	Currency,
	LooselyMustHave,
} from '@woocommerce/types';
import { formatPrice } from '@woocommerce/price-format';
import {
	areShippingMethodsMissing,
	getTotalShippingValue,
	hasShippingRate,
} from '@woocommerce/base-components/cart-checkout/totals/shipping/utils';
import { useSelect } from '@wordpress/data';
import { CHECKOUT_STORE_KEY } from '@woocommerce/block-data';
/**
 * Internal dependencies
 */
import './style.scss';

export interface TotalsFooterItemProps {
	/**
	 * The currency object with which to display the item
	 */
	currency: Currency;
	/**
	 * An object containing the total price and the total tax
	 *
	 * It accepts the entire `CartResponseTotals` to be passed, for
	 * convenience, but will use only these two properties.
	 */
	values: LooselyMustHave< CartResponseTotals, 'total_price' | 'total_tax' >;
	className?: string;
}

/**
 * The total at the bottom of the cart
 *
 * Can show how much of the total is in taxes if the settings
 * `taxesEnabled` and `displayCartPricesIncludingTax` are both
 * enabled.
 */
const TotalsFooterItem = ( {
	currency,
	values,
	className,
}: TotalsFooterItemProps ): JSX.Element => {
	const SHOW_TAXES =
		getSetting< boolean >( 'taxesEnabled', true ) &&
		getSetting< boolean >( 'displayCartPricesIncludingTax', false );

	let {
		total_price: totalPrice,
		total_tax: totalTax,
		tax_lines: taxLines,
	} = values;

	// Prepare props to pass to the applyCheckoutFilter filter.
	// We need to pluck out receiveCart.
	// eslint-disable-next-line no-unused-vars
	const { receiveCart, ...cart } = useStoreCart();
	const label = applyCheckoutFilter( {
		filterName: 'totalLabel',
		defaultValue: __( 'Total', 'woo-gutenberg-products-block' ),
		extensions: cart.extensions,
		arg: { cart },
	} );
	const { shippingRates } = useStoreCart();
	const prefersCollection = useSelect( ( select ) => {
		return select( CHECKOUT_STORE_KEY ).prefersCollection();
	} );
	const totalShippingValue = getTotalShippingValue( {
		total_shipping_tax: values.total_shipping_tax || '0',
		total_shipping: values.total_shipping || '0',
	} );
	const hasRates = hasShippingRate( shippingRates ) || totalShippingValue > 0;
	const shippingMethodsMissing = areShippingMethodsMissing(
		hasRates,
		prefersCollection,
		shippingRates
	);

	if ( shippingMethodsMissing ) {
		totalTax = `${
			parseInt( totalTax, 10 ) -
			parseInt( values.total_shipping_tax || '0', 10 ) * 2
		}`;
		totalPrice = `${
			parseInt( totalPrice, 10 ) -
			parseInt( values.total_shipping_tax || '0', 10 ) * 2 -
			parseInt( values.total_shipping || '0', 10 )
		}`;
	}

	const parsedTaxValue = parseInt( totalTax, 10 );
	const description =
		taxLines && taxLines.length > 0
			? sprintf(
					/* translators: %s is a list of tax rates */
					__( 'Including %s', 'woo-gutenberg-products-block' ),
					taxLines
						.map( ( { name, price } ) => {
							return `${ formatPrice(
								price,
								currency
							) } ${ name }`;
						} )
						.join( ', ' )
			  )
			: __(
					'Including <TaxAmount/> in taxes',
					'woo-gutenberg-products-block'
			  );

	return (
		<TotalsItem
			className={ classNames(
				'wc-block-components-totals-footer-item',
				className
			) }
			currency={ currency }
			label={ label }
			value={ parseInt( totalPrice, 10 ) }
			description={
				SHOW_TAXES &&
				parsedTaxValue !== 0 && (
					<p className="wc-block-components-totals-footer-item-tax">
						{ createInterpolateElement( description, {
							TaxAmount: (
								<FormattedMonetaryAmount
									className="wc-block-components-totals-footer-item-tax-value"
									currency={ currency }
									value={ parsedTaxValue }
								/>
							),
						} ) }
					</p>
				)
			}
		/>
	);
};

export default TotalsFooterItem;
