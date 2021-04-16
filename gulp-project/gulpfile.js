/* Gulp */
const { src, dest, watch, parallel, series } = require('gulp')

/* Plugins */
const scss              = require('gulp-sass')
const concat            = require('gulp-concat')
const browserSync       = require('browser-sync').create()
const uglify            = require('gulp-uglify-es').default
const autoprefixer      = require('gulp-autoprefixer')
const imagemin          = require('gulp-imagemin')
const del               = require('del')

/* Browser Sync */
function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false
    })
}

/* Del */ 
function cleanDist() {
    return del('dist')
}

/* Images */ 
function images() {
    return src('app/img/**/*')
    .pipe(imagemin(
        [
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]
    ))
    .pipe(dest('dist/img'))
}

/* Css */
function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({
            outputStyle: 'compressed'
        }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version']
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

/* Scripts */
function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'app/slick/slick.min.js',
        'app/js/script.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

/* Build */
function build() {
    return src([
        'app/css/style.min.css', // Выбираем папку с минифицированным файлом стилей
        'app/fonts/**/*', // Выбираем папку со шрифтами
        'app/slick/**/*', // Выбираем папку слайдера
        'app/js/main.min.js', // Выибираем папку с минифицированным файлом скриптов
        'app/*.html' // Выибираем все файлы html
    ], {base: 'app'})
    .pipe(dest('dist'))
}

/* Watch */
function watching() {
    watch(['app/scss/**/*.scss'], styles) // Пишем за какой папкой следить, а потом какие предпринимать действия
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
    watch(['app/*.html']).on('change', browserSync.reload)
}

/* Exports */
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build)
exports.default = parallel(styles, scripts, browsersync, watching)