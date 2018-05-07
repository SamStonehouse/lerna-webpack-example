const path = require('path');

const testBuilder = (ROOT_DIR, SOURCE_DIR) => {
	return {
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
};

module.exports = testBuilder;