/**
 * BLOCK: linked-icon
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
registerBlockType( 'dunn-blocks/linked-icon', {
	title: __( 'Linked Icon' ),
	icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></svg>,
	category: 'dunn',
	keywords: [
		__( 'Linked Icon' ),
		__( 'Dunn' ),
	],
	attributes,
	edit: ( props ) => {
		return (
			<Fragment>
				<Inspector { ...props } />
				<Edit { ...props } />
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
