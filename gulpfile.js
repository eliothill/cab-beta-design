// Gulp Dependencies
var gulp = require('gulp');

// Style Dependencies
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');

gulp.task('styles', [], function() {
	return gulp.src('./stylesheet/less/style.less')
		.pipe(sourcemaps.init({debug: true}))
		.pipe(less())
		.pipe(sourcemaps.write({includeContent: false, sourceRoot: './stylesheet'}))
		.pipe(prefix({ cascade: true }))
		.pipe(gulp.dest('./stylesheet/less/'));
});

gulp.task('watch', ['styles'], function() {
	gulp.watch(['./stylesheet/**/*.less'], ['styles']);
});


gulp.task('default', ['styles', 'watch']);
