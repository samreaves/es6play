// Import required modules
var path = require('path');

module.exports = {
	entry: './src/es6/app.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: path.join(__dirname, 'src/es6'), loader: 'babel-loader'}
		]
	},
	stats: {
		// Nice colorful output
		colors: true
	},
	//Create sourcemaps for the bundle
	devtool: 'source-map'
};