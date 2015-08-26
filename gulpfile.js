// Import gulp, gulp sync, clean and webpack
var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var clean = require('gulp-clean');
var webpack = require('gulp-webpack');

// Default task
gulp.task('default', gulpsync.sync([
	// synchronous
	'clean',

	// asynchronous after synchronous
	['moveHTML', 'webpack']
]));

// Cleans dist folder before new app files are piped in
gulp.task('clean', function() {

	return gulp.src('dist', {read: false})
        .pipe(clean());
});

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