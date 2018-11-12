import PropTypes from 'prop-types';

const { getComputedStyle } = window;
const { compose } = wp.compose;
const { __ } = wp.i18n;
const {
	ContrastChecker,
	InspectorControls,
	PanelColorSettings,
	withColors,
} = wp.editor;
const {
	PanelBody,
	RangeControl,
	TextControl,
	withFallbackStyles,
} = wp.components;

const applyFallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const { overlayColor } = ownProps;
	const overlayColorValue = overlayColor && overlayColor.color;
	return {
		fallbackOverlayColor: overlayColorValue || ! node ? undefined : getComputedStyle( node ).backgroundColor,
	};
} );

const Inspector = ( { attributes, fallbackOverlayColor, overlayColor, setAttributes, setOverlayColor } ) => {
	const { blockHeight, buttonText, buttonUrl, overlayOpacity } = attributes;
	return (
		<InspectorControls>
			<PanelBody
				initialOpen={ false }
				title={ __( 'Block Settings' ) }
			>
				<RangeControl
					label={ __( 'Block Height' ) }
					value={ blockHeight }
					onChange={ ( newValue ) => setAttributes( { blockHeight: newValue } ) }
					min={ 100 }
					max={ 500 }
					step={ 10 }
				/>
			</PanelBody>
			<PanelColorSettings
				title={ __( 'Overlay Settings' ) }
				initialOpen={ false }
				colorSettings={ [
					{
						label: __( 'Overlay Color' ),
						onChange: setOverlayColor,
						value: overlayColor.color,
					},
				] }
			>
				<ContrastChecker
					{ ...{
						backgroundColor: overlayColor.color,
						fallbackBackgroundColor: fallbackOverlayColor,
						textColor: '#ffffff',
					} }
					fontSize="16"
				/>
				<RangeControl
					label={ __( 'Overlay Opacity' ) }
					value={ overlayOpacity }
					onChange={ ( newOverlayOpacity ) => setAttributes( { overlayOpacity: newOverlayOpacity } ) }
					min={ 0 }
					max={ 100 }
					step={ 10 }
				/>
			</PanelColorSettings>
			<PanelBody
				initialOpen={ false }
				title={ __( 'Button Settings' ) }
			>
				<TextControl
					label={ __( 'Button Text' ) }
					help={ __( 'This text appears on the button when someone hovers over the image.' ) }
					onChange={ newText => setAttributes( { buttonText: newText } ) }
					value={ buttonText }
				/>
				<TextControl
					label={ __( 'Button URL' ) }
					help={ __( 'The URL for the button.' ) }
					onChange={ newButtonUrl => setAttributes( { buttonUrl: newButtonUrl } ) }
					value={ buttonUrl }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

Inspector.propTypes = {
	attributes: PropTypes.object,
	setAttributes: PropTypes.func,
};

export default compose( [
	withColors( 'backgroundColor', { overlayColor: 'color' } ),
	applyFallbackStyles,
] )( Inspector );
