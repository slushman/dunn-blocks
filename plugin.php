<?php
/**
 * Plugin Name: Dunn Blocks
 * Plugin URI: https://github.com/dccmarketing/dunn-blocks
 * Description: Blocks created for the Dunn Company website.
 * Author: slushman
 * Author URI: https://www.slushman.com/
 * Version: 1.0.1
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package DunnBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function dunn_blocks_assets() {

	wp_enqueue_style(
		'dunn_blocks-css',
		plugin_dir_url( __FILE__ ) . 'dist/blocks.style.build.css', dirname( __FILE__ ),
		array( 'wp-blocks' )
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' )
	);

} // dunn_blocks_assets()

add_action( 'enqueue_block_assets', 'dunn_blocks_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function dunn_blocks_editor_assets() {

	wp_enqueue_script(
		'dunn_blocks-js',
		plugin_dir_url( __FILE__ ) . 'dist/blocks.build.js', dirname( __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ),
		true
	);

	wp_enqueue_style(
		'dunn_blocks-editor-css',
		plugin_dir_url( __FILE__ ) . 'dist/blocks.editor.build.css', dirname( __FILE__ ),
		array( 'wp-edit-blocks' )
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' )
	);
} // dunn_blocks_editor_assets()

add_action( 'enqueue_block_editor_assets', 'dunn_blocks_editor_assets' );

/**
 * Adds a custom category to the Blocks Categories list.
 * 
 * @hooked 		block_categories
 * @since 		1.0.0
 * @param 		array 			$categories 		The current block categories.
 * @param 		WP_Post 		$post 				Post object.
 * @return 		array 								The modified block categories.
 */
function dunn_add_block_category( $categories, $post ) {

	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'dunn',
				'title' => __( 'Dunn Blocks', 'dunn-blocks' ),
			),
		)
	);

} // dunn_add_block_category()

add_filter( 'block_categories', 'dunn_add_block_category', 10, 2 );
