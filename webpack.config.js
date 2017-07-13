var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/');
var BUILD_DIR = path.resolve(__dirname, 'public');

var config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.js?/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css?/,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		historyApiFallback: true
	}
};

module.exports = config;