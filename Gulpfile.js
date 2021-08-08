/* 
	Created: Wednesday (04/03/2015)
	Filename: Gulpfile.js
	Author: Lucas Russo
*/

// variables - ok
var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');


// cssmin - ok
gulp.task('cssmin', function () {
    gulp.src('assets/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('assets/min'))
        .pipe(notify('<%= file.relative %> minificado com sucesso'));
});

// jsmin - ok
gulp.task('jsmin', function () {
    gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/min'))
        .pipe(notify('<%= file.relative %> minificado com sucesso'));
});

// declarada como default - ok
gulp.task('default', ['cssmin', 'jsmin']);

// declarada como watch - ok
gulp.task('watch', function() {
    gulp.watch('assets/css/*.css', ['cssmin']);
    gulp.watch('assets/js/*.js', ['jsmin']);
});