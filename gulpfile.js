const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

// task to compile sass
gulp.task('styles', function() {
    return gulp .src('./dev/styles/**/*.scss')
                .pipe( sass().on('error', sass.logError) )
                .pipe( concat('style.css') )
                .pipe( gulp.dest('./public/styles/') );
});

//convert JS to es2015
gulp.task('scripts', function() {
    return gulp .src('./dev/scripts/**/*.js')
                .pipe(babel({
                    presets: ['es2015']
                }))
                .pipe( gulp.dest('./public/scripts/') );
});

// task to watch changes
gulp.task('watch', function() {
    gulp.watch('./dev/styles/**/*.scss', ['styles']);
    gulp.watch('./dev/scripts/main.js', ['scripts']);
});

// default task
gulp.task('default', ['styles', 'scripts', 'watch']);