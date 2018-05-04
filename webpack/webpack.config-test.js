const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SOURCE_DIR = path.resolve(__dirname, 'source');

const config = {
	entry: path.join(SOURCE_DIR, 'scripts', 'index.js'),
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: "null-loader" },
				],
			},
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		],
	},
	devtool: "inline-cheap-module-source-map"
};

module.exports = config;