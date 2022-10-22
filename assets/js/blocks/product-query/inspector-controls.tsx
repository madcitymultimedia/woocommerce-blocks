/**
 * External dependencies
 */
import { ElementType, useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { EditorBlock, ProductResponseItem } from '@woocommerce/types';
import { getProducts } from '@woocommerce/editor-components/utils';
import {
	FormTokenField,
	ToggleControl,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToolsPanel as ToolsPanel,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import {
	ProductQueryArguments,
	ProductQueryBlock,
	QueryBlockAttributes,
} from './types';
import {
	isWooQueryBlockVariation,
	setCustomQueryAttribute,
	useAllowedControls,
} from './utils';
import {
	ALL_PRODUCT_QUERY_CONTROLS,
	QUERY_LOOP_ID,
	STOCK_STATUS_OPTIONS,
} from './constants';

const NAMESPACED_CONTROLS = ALL_PRODUCT_QUERY_CONTROLS.map(
	( id ) =>
		`__woocommerce${ id[ 0 ].toUpperCase() }${ id.slice(
			1
		) }` as keyof ProductQueryArguments
);

function useDefaultWooQueryParamsForVariation(
	variationName: string | undefined
): Partial< ProductQueryArguments > {
	const variationAttributes: QueryBlockAttributes = useSelect(
		( select ) =>
			select( 'core/blocks' )
				.getBlockVariations( QUERY_LOOP_ID )
				.find(
					( variation: ProductQueryBlock ) =>
						variation.name === variationName
				)?.attributes
	);

	return variationAttributes
		? Object.assign(
				{},
				...NAMESPACED_CONTROLS.map( ( key ) => ( {
					[ key ]: variationAttributes.query[ key ],
				} ) )
		  )
		: {};
}

/**
 * Gets the id of a specific stock status from its text label
 *
 * In theory, we could use a `saveTransform` function on the
 * `FormFieldToken` component to do the conversion. However, plugins
 * can add custom stock statii which don't conform to our naming
 * conventions.
 */
function getStockStatusIdByLabel( statusLabel: FormTokenField.Value ) {
	const label =
		typeof statusLabel === 'string' ? statusLabel : statusLabel.value;

	return Object.entries( STOCK_STATUS_OPTIONS ).find(
		( [ , value ] ) => value === label
	)?.[ 0 ];
}

export const INSPECTOR_CONTROLS = {
	onSale: ( props: ProductQueryBlock ) => {
		const { query } = props.attributes;

		return (
			<ToolsPanelItem
				label={ __( 'Sale status', 'woo-gutenberg-products-block' ) }
				hasValue={ () => query.__woocommerceOnSale }
			>
				<ToggleControl
					label={ __(
						'Show only products on sale',
						'woo-gutenberg-products-block'
					) }
					checked={ query.__woocommerceOnSale || false }
					onChange={ ( __woocommerceOnSale ) => {
						setCustomQueryAttribute( props, {
							__woocommerceOnSale,
						} );
					} }
				/>
			</ToolsPanelItem>
		);
	},
	productSelector: ( props: ProductQueryBlock ) => {
		const { query } = props.attributes;

		const [ productsList, setProductsList ] = useState<
			ProductResponseItem[]
		>( [] );

		useEffect( () => {
			getProducts( { selected: [] } ).then( ( results ) => {
				setProductsList( results as ProductResponseItem[] );
			} );
		}, [] );

		return productsList.length ? (
			<ToolsPanelItem
				label={ __( 'Pick a product', 'woo-gutenberg-products-block' ) }
				hasValue={ () =>
					props.attributes.namespace ===
					'woocommerce/single-product-beta'
				}
			>
				<FormTokenField
					displayTransform={ ( token: string ) =>
						Number.isNaN( Number( token ) )
							? token
							: productsList.find(
									( product ) =>
										product.id === Number( token )
							  )?.name || ''
					}
					label={ __(
						'Pick a product',
						'woo-gutenberg-products-block'
					) }
					maxLength={ 1 }
					onChange={ ( productsNames ) => {
						setCustomQueryAttribute( props, {
							include: productsNames.map(
								( name ) =>
									productsList.find(
										( product ) => product.name === name
									)?.id
							),
						} );
					} }
					suggestions={ productsList.map(
						( product ) => product.name
					) }
					validateInput={ ( value: string ) => value }
					value={ query?.include || [] }
					__experimentalExpandOnFocus={ query?.include?.length === 0 }
				/>
			</ToolsPanelItem>
		) : (
			<ToolsPanelItem
				hasValue={ () => true }
				label={ __( 'Pick a product', 'woo-gutenberg-products-block' ) }
			>
				Loading products...
			</ToolsPanelItem>
		);
	},
	stockStatus: ( props: ProductQueryBlock ) => {
		const { query } = props.attributes;

		return (
			<ToolsPanelItem
				label={ __( 'Stock status', 'woo-gutenberg-products-block' ) }
				hasValue={ () => query.__woocommerceStockStatus }
			>
				<FormTokenField
					label={ __(
						'Stock status',
						'woo-gutenberg-products-block'
					) }
					onChange={ ( statusLabels ) => {
						const __woocommerceStockStatus = statusLabels
							.map( getStockStatusIdByLabel )
							.filter( Boolean ) as string[];

						setCustomQueryAttribute( props, {
							__woocommerceStockStatus,
						} );
					} }
					suggestions={ Object.values( STOCK_STATUS_OPTIONS ) }
					validateInput={ ( value: string ) =>
						Object.values( STOCK_STATUS_OPTIONS ).includes( value )
					}
					value={
						query?.__woocommerceStockStatus?.map(
							( key ) => STOCK_STATUS_OPTIONS[ key ]
						) || []
					}
					__experimentalExpandOnFocus={ true }
				/>
			</ToolsPanelItem>
		);
	},
};

const Controls = ( props: ProductQueryBlock ) => {
	const allowedControls = useAllowedControls( props.attributes );

	return (
		<InspectorControls>
			<ToolsPanel
				class="woocommerce-product-query-toolspanel"
				label={ __(
					'Product filters',
					'woo-gutenberg-products-block'
				) }
				resetAll={ () => {
					setCustomQueryAttribute( props, defaultWooQueryParams );
				} }
			>
				{ Object.entries( INSPECTOR_CONTROLS ).map(
					( [ key, Control ] ) =>
						allowedControls?.includes( key ) ? (
							<Control { ...props } />
						) : null
				) }
			</ToolsPanel>
		</InspectorControls>
	);
};

export const withProductQueryControls =
	< T extends EditorBlock< T > >( BlockEdit: ElementType ) =>
	( props: ProductQueryBlock ) => {
		const allowedControls = useAllowedControls( props.attributes );
		const defaultWooQueryParams = useDefaultWooQueryParamsForVariation(
			props.attributes.namespace
		);

		if (
			props.attributes.query?.include?.length === 0 &&
			props.attributes.namespace === 'woocommerce/single-product-beta'
		) {
			return (
				<>
					<div>I am a placeholder</div>
					<Controls { ...props } />
				</>
			);
		}

		return isWooQueryBlockVariation( props ) ? (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<ToolsPanel
						class="woocommerce-product-query-toolspanel"
						label={ __(
							'Product filters',
							'woo-gutenberg-products-block'
						) }
						resetAll={ () => {
							setCustomQueryAttribute(
								props,
								defaultWooQueryParams
							);
						} }
					>
						{ Object.entries( INSPECTOR_CONTROLS ).map(
							( [ key, Control ] ) =>
								allowedControls?.includes( key ) ? (
									<Control { ...props } />
								) : null
						) }
					</ToolsPanel>
				</InspectorControls>
			</>
		) : (
			<BlockEdit { ...props } />
		);
	};

addFilter( 'editor.BlockEdit', QUERY_LOOP_ID, withProductQueryControls );
