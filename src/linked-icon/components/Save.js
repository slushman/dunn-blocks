import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from './Icon';
import DashIcon from './Dashicon';

const { RichText } = wp.editor;

const iconSizeToClass = ( iconSize ) => {
	return ( 10 >= iconSize || 110 <= iconSize ) ? null : 'icon-size-' + ( 10 * Math.round( iconSize / 10 ) );
};

const Save = props => {
	const { attributes, className } = props;
	const { icon, iconLabel, iconSize, iconType, linkUrl } = attributes;
	const linkClasses = classNames( 'icon-link',
		iconSizeToClass( iconSize ),
	);
	return (
		<div className={ className }>
			<a className={ linkClasses } href={ linkUrl }>
				{ 'custom' === iconType &&
					<Icon icon={ icon } iconSize={ iconSize } />
				}
				{ 'dashicon' === iconType &&
					<DashIcon icon={ icon } size={ iconSize } />
				}
				{ ! RichText.isEmpty( iconLabel ) && (
					<RichText.Content className="icon-label" tagName="div" value={ iconLabel } />
				) }
			</a>
		</div>
	);
};

Save.propTypes = {
	attributes: PropTypes.object,
	className: PropTypes.string,
};

export default Save;
