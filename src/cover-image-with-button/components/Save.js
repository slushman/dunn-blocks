import PropTypes from 'prop-types';
import classNames from 'classnames';
import { dimRatioToClass } from '../functions';

const { RichText } = wp.editor;
const { getColorClassName, getColorObjectByColorValue } = wp.editor;

const Save = ( { attributes, className } ) => {
	console.log( attributes );
	const { imageUrl, overlayColor, overlayContent, overlayOpacity } = attributes;
	const bgColor = getColorObjectByColorValue( overlayColor );
	console.log( bgColor );
	const wrapperClasses = classNames(
		className,
		'cover-image-with-button-wrap',
		{ 'has-background-dim': 0 !== overlayOpacity },
		dimRatioToClass( overlayOpacity ),
		getColorClassName( 'background-color', overlayColor ),
	);
	const wrapperStyle = {
		backgroundImage: `url(${ imageUrl })`,
	};
	return (
		<div className={ wrapperClasses } data-url={ imageUrl } style={ wrapperStyle }>
			<RichText.Content
				className="overlay-content"
				tagName="p"
				value={ overlayContent }
			/>
		</div>
	);
};

Save.propTypes = {
	attributes: PropTypes.object,
	className: PropTypes.string,
};

export default Save;
