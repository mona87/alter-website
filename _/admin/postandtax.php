<?php

//create post types
add_action( 'init', 'create_post_types' );

function create_post_types() {

/*
//create Case Studies post type
  $labels = array(
    'name'               => 'Case Studies',
    'singular_name'      => 'Case Study',
    'add_new'            => 'Add New',
    'add_new_item'       => 'Add New Case Study',
    'edit_item'          => 'Edit Case Study',
    'new_item'           => 'New Case Study',
    'all_items'          => 'All Case Studies',
    'view_item'          => 'View Case Study',
    'search_items'       => 'Search Case Studies',
    'not_found'          => 'No Case Studies found',
    'not_found_in_trash' => 'No Case Studies found in Trash',
    'parent_item_colon'  => '',
    'menu_name'          => 'Case Studies'
  );

  $args = array(
    'labels'             => $labels,
    'exclude_from_search' => true,
    'public'             => true,
    //'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    //'query_var'          => true,
    'rewrite'            => array( 'slug' => 'case-studies' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => 5,
    'menu_icon'          => get_template_directory_uri() . '/_/assets/img/menu-icon.png',
    'supports'           => array( 'title', 'thumbnail' ),
 //   'taxonomies'         => array('category'),
  );

  register_post_type( 'casestudies', $args );
*/

}




// create taxonomies
add_action( 'init', 'create_taxonomies', 0 );

function create_taxonomies() {

/*
// channel taxonomy
$labels = array(
	'name'                       => _x( 'Channels', 'taxonomy general name' ),
	'singular_name'              => _x( 'Channel', 'taxonomy singular name' ),
	'search_items'               => __( 'Search Channels' ),
	'popular_items'              => __( 'Popular Channels' ),
	'all_items'                  => __( 'All Channels' ),
	'parent_item'                => null,
	'parent_item_colon'          => null,
	'edit_item'                  => __( 'Edit Channel' ),
	'update_item'                => __( 'Update Channel' ),
	'add_new_item'               => __( 'Add New Channel' ),
	'new_item_name'              => __( 'New Channel Name' ),
	'separate_items_with_commas' => __( '' ),
	'add_or_remove_items'        => __( 'Add or remove Channels' ),
	'choose_from_most_used'      => __( 'Choose from the most used Channels' ),
	'not_found'                  => __( 'No Channels found.' ),
	'menu_name'                  => __( 'Channels' ),
);

$args = array(
	'hierarchical'          => false,
	'labels'                => $labels,
	'show_ui'               => true,
	'show_admin_column'     => false,
	'update_count_callback' => '_update_post_term_count',
	'query_var'             => true,
	'rewrite'               => false //array( 'slug' => 'events' ),
);

  register_taxonomy( 'channels', array( 'casestudies' ), $args );
*/


} // end create taxonomies

?>