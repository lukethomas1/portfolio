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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'luke_wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'aOB7CkPBn6');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '}`B)CC|c~s#[fYs`?AP}F^YaZACZZfS 6p9h4^M^7zh=U!! Fwf=lsnBaA< HUAw');
define('SECURE_AUTH_KEY',  ':/1^^wMb!)Y?Xla_+Hpy|I|zmuB/etA<ZLHqDP7t?NT=MpbuZ{(S1Vt2-Zmj{~O ');
define('LOGGED_IN_KEY',    'IAY8)aqn(hn`-y?IQ>YNQGhx-JrL,IfDV@G8)Azc{twBQ_p2tmx}bct<d*{4>SDK');
define('NONCE_KEY',        '+Ng&@a<N|z#bxMGks%e0?*>(N@<xc SX M4A6:clL[bNh[`HUXB*${m_h9[8U02l');
define('AUTH_SALT',        '^sXZn{b]ook<J|%r_J@A4]|kMVuv3bC7k+iH?]S4SOTGe!|}@6Rh#ME3#@^7*,&.');
define('SECURE_AUTH_SALT', 'Y@}+m_,x|Lg@c8DJ#?sA}?r2oCA:oP$BU{K`o97yv&gm&#yhM bpH.7L} =*8a7U');
define('LOGGED_IN_SALT',   'W^0U$q-l6$a_4vk[6K0b)Q/p4nz+v#akGO{?aj^!hQ4^*[,-AOl WKxoA@>_WfMM');
define('NONCE_SALT',       'c?L`$2pon+?Q|.0QcFr{[WSJBzy/NrHZDYZ!ZVq cL9U-tNyxU6bj0^9+w$qI=Eu');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
