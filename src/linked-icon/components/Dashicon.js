import PropTypes from 'prop-types';

const { Dashicon } = wp.components;

const DashIcon = ( { className, icon, iconSize } ) => {
	return (
		<Dashicon className={ className } icon={ icon } size={ iconSize } />
	);
};

DashIcon.propTypes = {
	className: PropTypes.string,
	dashicon: PropTypes.string.isRequired,
	iconSize: PropTypes.number,
};

export default DashIcon;
