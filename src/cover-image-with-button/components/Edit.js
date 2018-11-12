import PropTypes from 'prop-types';
import classNames from 'classnames';
import { dimRatioToClass } from '../functions';

const { getComputedStyle } = window;
const { compose } = wp.compose;
const { __ } = wp.i18n;
const { withFallbackStyles } = wp.components;
const { Component, Fragment } = wp.element;
const { MediaPlaceholder, RichText, withColors } = wp.editor;
const ALLOWED_MEDIA_TYPES = [ 'image' ];

const applyFallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const { overlayColor } = ownProps;
	const overlayColorValue = overlayColor && overlayColor.color;
	return {
		fallbackOverlayColor: overlayColorValue || ! node ? undefined : getComputedStyle( node ).backgroundColor,
	};
} );

class Edit extends Component {
	onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			this.props.setAttributes( {
				imageUrl: undefined,
			} );
			return;
		}
		this.props.setAttributes( {
			imageUrl: media.url,
		} );
	};
	render() {
		const { attributes, className, overlayColor, setAttributes } = this.props;
		const { imageUrl, overlayContent, overlayOpacity } = attributes;
		console.log( { attributes } );

		if ( ! imageUrl ) {
			return (
				<Fragment>
					<MediaPlaceholder
						accept="image/*"
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						className={ className }
						icon="format-image"
						labels={ {
							name: __( 'an image' ),
							title: __( 'Image with Hover Text' ),
						} }
						onSelect={ this.onSelectImage }
						type="image"
					/>
				</Fragment>
			);
		}

		const wrapperClasses = classNames(
			className,
			'cover-image-with-button-wrap',
			{ 'has-background-dim': 0 !== overlayOpacity },
			dimRatioToClass( overlayOpacity ),
		);
		const wrapperStyles = {
			backgroundColor: overlayColor.color,
			backgroundImage: `url(${ imageUrl })`,
		};
		return (
			<div className={ wrapperClasses } data-url={ imageUrl } style={ wrapperStyles }>
				<RichText
					className="overlay-content"
					keepPlaceholderOnFocus={ true }
					placeholder={ __( 'Overlay content' ) }
					onChange={ ( newValue ) => setAttributes( { overlayContent: newValue } ) }
					tagName="p"
					value={ overlayContent }
				/>
			</div>
		);
	}
}

Edit.propTypes = {
	attributes: PropTypes.object,
	className: PropTypes.string,
	setAttributes: PropTypes.func,
};

export default compose( [
	withColors( 'backgroundColor', { overlayColor: 'color' } ),
	applyFallbackStyles,
] )( Edit );
