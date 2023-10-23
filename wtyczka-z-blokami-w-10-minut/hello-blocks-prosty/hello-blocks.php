<?php
/**
 * Plugin Name:       Hello Blocks!
 * Version:           1.0.0
 */

function add_block_scripts() {
	wp_enqueue_script(
    'hello-blocks-js',
    plugins_url( 'block.js', __FILE__ ),
    array( 'wp-block-editor', 'wp-blocks', 'wp-element' )
  );
}

add_action( 'enqueue_block_editor_assets', 'add_block_scripts' );