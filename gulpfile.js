// Import gulp and webpack
var gulp = require('gulp');
var clean = require('gulp-clean');
var webpack = require('gulp-webpack');

// Default task
gulp.task('default', ['moveHTML', 'webpack']);


// Default task runs webpack from src/app and places exported code into dist directory
gulp.task('webpack', function() {

	return gulp.src('src/app.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('dist'));
});

// Move html page to dist
gulp.task('moveHTML', function() {
	
	return gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});