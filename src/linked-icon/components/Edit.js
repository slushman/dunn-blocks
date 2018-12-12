import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from './Icon';
import DashIcon from './Dashicon';

const { __ } = wp.i18n;
const { RichText } = wp.editor;

const iconSizeToClass = ( iconSize ) => {
	return ( 10 >= iconSize || 110 <= iconSize ) ? null : 'icon-size-' + ( 10 * Math.round( iconSize / 10 ) );
};

const Edit = props => {
	const { attributes, className, setAttributes } = props;
	const { icon, iconLabel, iconSize, iconType } = attributes;
	const linkClasses = classNames( 'icon-link',
		iconSizeToClass( iconSize ),
	);
	return (
		<div className={ className }>
			<div className={ linkClasses }>
				{ 'custom' === iconType &&
					<Icon icon={ icon } iconSize={ iconSize } />
				}
				{ 'dashicon' === iconType &&
					<DashIcon icon={ icon } size={ iconSize } />
				}
				<RichText
					className="icon-label"
					keepPlaceholderOnFocus={ true }
					onChange={ ( newIconLabel ) => setAttributes( { iconLabel: newIconLabel } ) }
					placeholder={ __( 'Icon Label' ) }
					tagName="div"
					value={ iconLabel }
				/>
			</div>
		</div>
	);
};

Edit.propTypes = {
	attributes: PropTypes.object,
	className: PropTypes.string,
};

export default Edit;
