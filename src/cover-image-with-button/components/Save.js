import PropTypes from 'prop-types';
import classNames from 'classnames';
import { dimRatioToClass } from '../functions';
import Button from './Button';

const { RichText } = wp.editor;
const { getColorClassName } = wp.editor;

const Save = ( { attributes, className } ) => {
	const { blockHeight, buttonText, buttonUrl, imageLabel, imageUrl, overlayColor, overlayContent, overlayOpacity } = attributes;

	const containerClasses = classNames(
		className,
		'cover-image-container'
	);
	const wrapperClasses = classNames(
		'cover-image-with-button-wrap',
		{ 'has-background-dim': 0 !== overlayOpacity },
		{ 'has-button': buttonText && buttonUrl },
		dimRatioToClass( overlayOpacity ),
		getColorClassName( 'background-color', overlayColor ),
	);
	const wrapperStyle = {
		backgroundImage: `url(${ imageUrl })`,
		height: blockHeight,
	};
	return (
		<div className={ containerClasses }>
			<div className={ wrapperClasses } data-url={ imageUrl } style={ wrapperStyle }>
				<RichText.Content
					className="overlay-content"
					tagName="p"
					value={ overlayContent }
				/>
				{ buttonText && buttonUrl &&
					<Button text={ buttonText } url={ buttonUrl } />
				}
			</div>
			<RichText.Content
				className="image-label"
				tagName="p"
				value={ imageLabel }
			/>
		</div>
	);
};

Save.propTypes = {
	attributes: PropTypes.object,
	className: PropTypes.string,
};

export default Save;
