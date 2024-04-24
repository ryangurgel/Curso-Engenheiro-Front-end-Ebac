const gulp = require('gulp');
const { series } = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const image = require('gulp-imagemin');
const stripJs = require('gulp-strip-comments');
const stripCss = require('gulp-strip-css-comments');

function processCSS() {
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './vendor/owl/css/owl.css',
        './vendor/jquery-ui/jquery-ui.css',
        './src/css/style.css'
    ])
    .pipe(stripCss())                   // Remove comentários CSS
    .pipe(concat('styles.css'))         // Mescla arquivos CSS
    .pipe(cssmin())                     // Minifica CSS
    .pipe(rename({ suffix: '.min'}))    // Renomeia para styles.min.css
    .pipe(gulp.dest('./dist/css'));     // Salva no diretório de destino
}

function processJS() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/owl/js/owl.js',
        './vendor/jquery-mask/jquery.mask.js',
        './vendor/jquery-ui/jquery-ui.js',
        './src/js/custom.js'
    ])
    .pipe(stripJs())                    // Remove comentários JS
    .pipe(concat('scripts.js'))         // Mescla arquivos JS
    .pipe(uglify())                     // Minifica JS
    .pipe(rename({ suffix: '.min'}))    // Renomeia para scripts.min.js
    .pipe(gulp.dest('./dist/js'));      // Salva no diretório de destino
}

function processImages() {
    return gulp.src('./src/images/*')
    .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true
    }))
    .pipe(gulp.dest('./dist/images'));  // Salva no diretório de destino
}

exports.default = series(processCSS, processJS);
exports.images = processImages; 
