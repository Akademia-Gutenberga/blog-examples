<?php
/**
 * Plugin Name:       React Counter
 * Version:           0.1.0
 */

function create_block_akademia_block_init() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'create_block_akademia_block_init' );



























function add_editor_styles() {
		add_editor_style( plugins_url( 'editor.css', __FILE__ ) );
}
add_action( 'admin_init', 'add_editor_styles' );
