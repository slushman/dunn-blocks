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

const Inspector = ( { attributes, overlayColor, setAttributes, setOverlayColor } ) => {
	const { overlayOpacity } = attributes;
	return (
		<InspectorControls>
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
				<RangeControl
					label={ __( 'Overlay Opacity' ) }
					value={ overlayOpacity }
					onChange={ ( newOverlayOpacity ) => setAttributes( { overlayOpacity: newOverlayOpacity } ) }
					min={ 0 }
					max={ 100 }
					step={ 10 }
				/>
			</PanelColorSettings>
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
