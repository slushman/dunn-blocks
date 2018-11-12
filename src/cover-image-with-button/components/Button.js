import PropTypes from 'prop-types';

const Button = ( { text, url } ) => {
	return (
		<a className="cover-image-button-link" href={ url }>
			<span className="cover-image-button-text">{ text }</span>
		</a>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default Button;
