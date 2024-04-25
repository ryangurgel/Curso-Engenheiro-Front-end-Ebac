const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

async function compileSass() {
    const autoprefixer = (await import('gulp-autoprefixer')).default;
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'));
}

function processCSS() {
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './node_modules/owl.carousel/dist/assets/owl.carousel.css',
        './node_modules/jquery-ui-dist/jquery-ui.css',
        './dist/css/style.css'
    ])
    .pipe(concat('styles.css'))         // Mescla arquivos CSS
    .pipe(cssmin())                     // Minifica CSS
    .pipe(rename({ suffix: '.min'}))    // Renomeia para styles.min.css
    .pipe(gulp.dest('./dist/css'));     // Salva no diretório de destino
}

function processJS() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './node_modules/owl.carousel/dist/owl.carousel.js',
        './node_modules/jquery-mask-plugin/dist/jquery.mask.js',
        './node_modules/jquery-ui-dist/jquery-ui.js',
        './src/js/custom.js'
    ])
    .pipe(concat('scripts.js'))         // Mescla arquivos JS
    .pipe(uglify())                     // Minifica JS
    .pipe(rename({ suffix: '.min'}))    // Renomeia para scripts.min.js
    .pipe(gulp.dest('./dist/js'));      // Salva no diretório de destino
}

function processImages() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(gulp.dest('./dist/images'));
}

function startServer() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/**/*.scss', compileSass);
    gulp.watch('./src/css/**/*.css').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}


exports.compileSass = compileSass;
exports.processCSS = processCSS;
exports.processJS = processJS;
exports.processImages = processImages;
exports.startServer = startServer;
exports.default = gulp.series(compileSass, processCSS, processJS, processImages, startServer);
