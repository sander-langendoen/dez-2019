'use strict';

// dependencies
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCSS = require('gulp-clean-css'),
    changed = require('gulp-changed');    

// scss/css
var scss_src  = './src/scss/**/*.scss';
var scss_dest = './src/css/';


// gulp tasks
gulp.task('sass', function () {
    return gulp.src(scss_src)
        .pipe(sourcemaps.init())
        .pipe(changed(scss_dest))
        .pipe(sass({
            outputStyle: 'compressed',
        }).on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(autoprefixer({
            browsers: ["> 2%"],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(scss_dest))
});


gulp.task('watch', function() {
    gulp.watch(scss_src, gulp.series('sass'));  // sass = name of task
});


// gulp.task('watch', function () {
//      gulp.watch('/src/scss/**/*', { interval: 750 }, ['sass', // 'connect'
//      ]);
// });