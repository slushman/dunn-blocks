const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { RadioControl, RangeControl, SelectControl, TextControl } = wp.components;

import dashicons from './dashicon-list';

const Inspector = props => {
	const { attributes, setAttributes } = props;
	const { icon, iconSize, iconType, linkUrl } = attributes;
	return (
		<Fragment>
			<InspectorControls key="inspector">
				<RadioControl
					label={ __( 'Icon Type' ) }
					help={ __( 'Is this a dashicon or custom icon?' ) }
					onChange={ newIconType => setAttributes( { iconType: newIconType } ) }
					options={ [
						{ label: __( 'Dashicon' ), value: 'dashicon' },
						{ label: __( 'Custom' ), value: 'custom' },
					] }
					selected={ iconType }
				/>
				{ 'custom' === iconType &&
					<SelectControl
						label={ __( 'Select a custom icon' ) }
						onChange={ newIcon => setAttributes( { icon: newIcon } ) }
						options={ [
							{ label: __( 'Choose an icon' ), value: '' },
							{ label: __( 'Commercial' ), value: 'commercial' },
							{ label: __( 'Energy' ), value: 'energy' },
							{ label: __( 'Government' ), value: 'government' },
							{ label: __( 'Industrial' ), value: 'industrial' },
							{ label: __( 'Institutional' ), value: 'institutional' },
							{ label: __( 'Residential' ), value: 'residential' },
						] }
						value={ icon }
					/>
				}
				{ 'dashicon' === iconType &&
					<SelectControl
						label={ __( 'Select a dashicon' ) }
						onChange={ newIcon => setAttributes( { icon: newIcon } ) }
						options={ dashicons }
						value={ icon }
					/>
				}
				<RangeControl
					label={ __( 'Icon Size' ) }
					value={ iconSize }
					onChange={ ( newIconSize ) => setAttributes( { iconSize: newIconSize } ) }
					min={ 20 }
					max={ 100 }
					step={ 10 }
				/>
				<TextControl
					label={ __( 'Link URL' ) }
					onChange={ newLinkUrl => setAttributes( { linkUrl: newLinkUrl } ) }
					value={ linkUrl }
				/>
			</InspectorControls>
		</Fragment>
	);
};

export default Inspector;
