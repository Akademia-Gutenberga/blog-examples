<?php
/**
 * Plugin Name:       Hello Blocks!
 * Version:           1.0.0
 */

function my_add_block() {
	register_block_type( __DIR__ . '/block.json' );
}

add_action( 'init', 'my_add_block' );