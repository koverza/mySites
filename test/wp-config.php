<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'test' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'dvCo|G@7~3qVnlwUMYz0aimk-@[Tr$vi?.8P<CB{ {9)6okp/u_S~0NA5p^y8XBF' );
define( 'SECURE_AUTH_KEY',  '$]+_(3vfv=3Hfjaoa|YC!evh#^*!y;p%c8-lKCV7rb)*D4+3JLZiA|aeiYN`ZPkV' );
define( 'LOGGED_IN_KEY',    'POI-ww?Kc}O!7;G=.4ksIK?(QDT7qN+j>z:` iXLDV)-8@B Ycab;[k,f>hNJUuD' );
define( 'NONCE_KEY',        'Dnn[V,_x&8:1=}6@Yn7Wv9pLZI~N@S{s5OB@cSL7)UZf;K#yKxEG~ksX~L6 [o:h' );
define( 'AUTH_SALT',        'Jpx2:%t1?K^4pb1Mgf8kNg>x-Apv|5# @K7E%D_In1k8IZ&z[8#@EdRVj-aR[a<o' );
define( 'SECURE_AUTH_SALT', '|a5BMz$MQJZQY58qw=KeM@4rX*<1s$m`=d /evmv-A[;{c{M}P}F^x :;o+Ed7EN' );
define( 'LOGGED_IN_SALT',   '4}ehY*l~a+i,YhcsXYDA1+H>C[?T,*^Za~sIOiacg+vMQyS}@o4LynI0^<Xn@@ !' );
define( 'NONCE_SALT',       '3Qc3r!83Ht)-7`ZU.h+&XK-c<qSl~M&Oi-SmEMi@qZ|B+`Xz?jJJ@vY;Kniiiq((' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
