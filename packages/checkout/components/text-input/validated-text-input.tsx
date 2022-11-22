/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useCallback,
	useRef,
	useEffect,
	useState,
	InputHTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { withInstanceId } from '@wordpress/compose';
import { isObject, isString } from '@woocommerce/types';
import { dispatch, useDispatch, useSelect } from '@wordpress/data';
import {
	VALIDATION_STORE_KEY,
	STORE_NOTICES_STORE_KEY,
} from '@woocommerce/block-data';

/**
 * Internal dependencies
 */
import TextInput from './text-input';
import './style.scss';
import { ValidationInputError } from '../validation-input-error';

interface ValidatedTextInputProps
	extends Omit<
		InputHTMLAttributes< HTMLInputElement >,
		'onChange' | 'onBlur'
	> {
	id?: string;
	instanceId: string;
	className?: string | undefined;
	ariaDescribedBy?: string | undefined;
	errorId?: string;
	focusOnMount?: boolean;
	showError?: boolean;
	errorMessage?: string | undefined;
	onChange: ( newValue: string ) => void;
	label?: string | undefined;
	value: string;
	noticeContext?: string | undefined;
}

const ValidatedTextInput = ( {
	className,
	instanceId,
	id,
	ariaDescribedBy,
	errorId,
	focusOnMount = false,
	onChange,
	showError = true,
	errorMessage: passedErrorMessage = '',
	value = '',
	noticeContext,
	...rest
}: ValidatedTextInputProps ): JSX.Element => {
	const [ isPristine, setIsPristine ] = useState( true );
	const inputRef = useRef< HTMLInputElement >( null );

	const { setValidationErrors, hideValidationError, clearValidationError } =
		useDispatch( VALIDATION_STORE_KEY );
	const textInputId =
		typeof id !== 'undefined' ? id : 'textinput-' + instanceId;
	const errorIdString = errorId !== undefined ? errorId : textInputId;

	const { validationError, validationErrorId } = useSelect( ( select ) => {
		const store = select( VALIDATION_STORE_KEY );
		return {
			validationError: store.getValidationError( errorIdString ),
			validationErrorId: store.getValidationErrorId( errorIdString ),
		};
	} );

	// For store notices, register the container context with the parent.
	const { registerContainer, unregisterContainer } = useDispatch(
		STORE_NOTICES_STORE_KEY
	);

	useEffect( () => {
		if ( noticeContext ) {
			registerContainer( noticeContext );
		}
		return () => {
			if ( noticeContext ) {
				unregisterContainer( noticeContext );
			}
		};
	}, [ noticeContext, registerContainer, unregisterContainer ] );

	const notices = useSelect(
		( select ) => {
			return select( 'core/notices' )
				.getNotices( noticeContext )
				.filter( ( notice ) => notice.status === 'error' );
		},
		[ noticeContext ]
	);

	const clearNotices = useCallback( () => {
		const { removeNotice } = dispatch( 'core/notices' );
		notices.forEach( ( notice ) => {
			removeNotice( notice.id, noticeContext );
		} );
	}, [ noticeContext, notices ] );

	const validateInput = useCallback(
		( errorsHidden = true ) => {
			if ( ! inputRef.current ) {
				return;
			}
			const inputObject = inputRef.current;
			inputObject.value = inputObject.value.trim(); // Trim white space before validation.

			if ( inputObject.checkValidity() && notices.length === 0 ) {
				clearValidationError( errorIdString );
				return;
			}

			const validationErrors = {
				[ errorIdString ]: {
					message:
						inputObject.validationMessage ||
						notices[ 0 ]?.content ||
						__(
							'The provided value is invalid',
							'woo-gutenberg-products-block'
						),
					hidden: errorsHidden,
				},
			};
			setValidationErrors( validationErrors );
		},
		[ clearValidationError, errorIdString, setValidationErrors, notices ]
	);

	// Trigger validation when notices change.
	useEffect( () => {
		validateInput( false );
	}, [ notices, validateInput ] );

	/**
	 * Focus on mount
	 *
	 * If the input is in pristine state, focus the element.
	 */
	useEffect( () => {
		if ( isPristine && focusOnMount ) {
			inputRef.current?.focus();
		}
		setIsPristine( false );
	}, [ focusOnMount, isPristine, setIsPristine ] );

	/**
	 * Value Validation
	 *
	 * Runs validation on state change if the current element is not in focus. This is because autofilled elements do not
	 * trigger the blur() event, and so values can be validated in the background if the state changes elsewhere.
	 */
	useEffect( () => {
		if (
			inputRef.current?.ownerDocument?.activeElement !== inputRef.current
		) {
			validateInput( true );
		}
		// We need to track value even if it is not directly used so we know when it changes.
	}, [ value, validateInput ] );

	// Remove validation errors when unmounted.
	useEffect( () => {
		return () => {
			clearValidationError( errorIdString );
		};
	}, [ clearValidationError, errorIdString ] );

	if (
		isString( passedErrorMessage ) &&
		passedErrorMessage !== '' &&
		isObject( passedErrorMessage )
	) {
		validationError.message = passedErrorMessage;
	}

	const hasError = validationError?.message && ! validationError?.hidden;
	const describedBy =
		showError && hasError && validationErrorId
			? validationErrorId
			: ariaDescribedBy;

	return (
		<TextInput
			className={ classnames( className, {
				'has-error': hasError,
			} ) }
			aria-invalid={ hasError === true }
			id={ textInputId }
			onBlur={ () => {
				validateInput( false );
			} }
			feedback={
				showError && (
					<ValidationInputError
						errorMessage={ passedErrorMessage }
						propertyName={ errorIdString }
					/>
				)
			}
			ref={ inputRef }
			onChange={ ( val ) => {
				hideValidationError( errorIdString );
				clearNotices();
				validateInput( true );
				onChange( val );
			} }
			ariaDescribedBy={ describedBy }
			value={ value }
			{ ...rest }
		/>
	);
};
export const __ValidatedTexInputWithoutId = ValidatedTextInput;
export default withInstanceId( ValidatedTextInput );
