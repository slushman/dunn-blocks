/**
 * BLOCK: cover-image-with-button
 *
 * Registering a basic block with Gutenberg.
 */

import './style.scss';
import './editor.scss';

import Edit from './components/Edit';
import Inspector from './components/Inspector';
import Save from './components/Save';
import attributes from './attributes';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;

/**
 * Register a Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param 		{string} 	name 		Block name.
 * @param 		{Object} 	settings 	Block settings.
 * @return 		{?WPBlock} 				The block, if it has been successfully
 * 											registered; otherwise `undefined`.
 */
registerBlockType( 'dunn-blocks/cover-image-with-button', {
	title: __( 'Cover Image with Button' ),
	icon: 'format-image',
	category: 'dunn',
	keywords: [
		__( 'Cover Image Button' ),
		__( 'Dunn' ),
	],
	attributes,
	edit: ( props ) => {
		return (
			<Fragment>
				<Inspector
					attributes={ props.attributes }
					setAttributes={ props.setAttributes }
				/>
				<Edit
					attributes={ props.attributes }
					className={ props.className }
					setAttributes={ props.setAttributes }
				/>
			</Fragment>
		);
	},
	save: ( props ) => {
		return (
			<Save
				attributes={ props.attributes }
				className={ props.className }
			/>
		);
	},
} );
