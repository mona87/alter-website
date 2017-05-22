<?php

//clean up the WP <head>
function head_cleanup() {
  // Originally from http://wpengineer.com/1438/wordpress-header/
  remove_action('wp_head', 'feed_links_extra', 3);
  add_action('wp_head', 'ob_start', 1, 0);
  add_action('wp_head', function () {
    $pattern = '/.*' . preg_quote(esc_url(get_feed_link('comments_' . get_default_feed())), '/') . '.*[\r\n]+/';
    echo preg_replace($pattern, '', ob_get_clean());
  }, 3, 0);
  remove_action('wp_head', 'rsd_link');
  remove_action('wp_head', 'wlwmanifest_link');
  remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10);
  remove_action('wp_head', 'wp_generator');
  remove_action('wp_head', 'wp_shortlink_wp_head', 10);
  remove_action('wp_head', 'print_emoji_detection_script', 7);
  remove_action('admin_print_scripts', 'print_emoji_detection_script');
  remove_action('wp_print_styles', 'print_emoji_styles');
  remove_action('admin_print_styles', 'print_emoji_styles');
  remove_action('wp_head', 'wp_oembed_add_discovery_links');
  remove_action('wp_head', 'wp_oembed_add_host_js');
  remove_action('wp_head', 'rest_output_link_wp_head', 10);
  remove_filter('the_content_feed', 'wp_staticize_emoji');
  remove_filter('comment_text_rss', 'wp_staticize_emoji');
  remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
  add_filter('use_default_gallery_style', '__return_false');

}

add_action('init', 'head_cleanup');


//add pagename as class to <body> tag
function page_bodyclass() {
	global $wp_query;
	$page = '';
	if (is_front_page() ) {
    	   $page = 'home';
	} elseif (is_page()) {
   	   $page = $wp_query->query_vars["pagename"];
	}
	if ($page)
		echo 'class= "'. $page. get_parent_class(). '"';
}

//acf options page
if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));

/*
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Common Site Assets',
		'menu_title'	=> 'Site Assets',
		'parent_slug'	=> 'theme-general-settings',
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Footer Settings',
		'menu_title'	=> 'Footer',
		'parent_slug'	=> 'theme-general-settings',
	));

*/
}


function remove_admin_menu_pages() {
    remove_menu_page( 'edit.php' );
}
add_action( 'admin_menu', 'remove_admin_menu_pages' );



//admin css
function admin_css() {
  echo '<style type="text/css">
        #adminmenu .wp-menu-image img {
          width: 20px;
          height: 20px;
        }
       </style>';
}
add_action('admin_head', 'admin_css');


//add support and configuration details for thumbnails
add_theme_support( 'post-thumbnails' );
//add_image_size('backend-thumb', 420, 9999);
//add_image_size('xl', 1920, 9999);


//remove taxonomy meta boxes from post types
function remove_tax_meta_from_post_types() {
//	remove_meta_box( 'tagsdiv-industries', 'casestudies', 'normal' );
}
add_action( 'admin_menu' , 'remove_tax_meta_from_post_types' );




?>