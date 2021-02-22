<?php


//Добавляем наши стили и скрипты

add_action( 'wp_enqueue_scripts', 'plastika_scripts' );



function plastika_scripts() {

// Подключаем стили
	
	wp_enqueue_style( 'plastika-style', get_stylesheet_uri());

	wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/style.css' );


    //Подключаем скрипты


	wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), null,  true );
    wp_enqueue_script( 'slick.min.js', get_template_directory_uri() . '/assets/js/slick.min.js', array('jquery'), null,  true );


	wp_enqueue_script( 'main', 'https://code.jquery.com/jquery-3.5.1.js', array('jquery'), null,   true );


	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}


?>