// Import gulp and babel
var gulp = require('gulp');
var babel = require('gulp-babel');

// Default task runs babel from src/app and places exported code into dist directory
gulp.task('default', function() {

	return gulp.src('src/app.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});