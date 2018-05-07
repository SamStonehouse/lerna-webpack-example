const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Creates a webpack configuration object when provided with a root directory, source directory and build directory
 *
 * Directories should be relative to where the webpack executatble is running from
 *
 * @param {String} ROOT_DIR
 * @param {String} SOURCE_DIR
 * @param {String} BUILD_DIR
 */
const build = (ROOT_DIR, SOURCE_DIR, BUILD_DIR) => {
	return {
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						{ loader: MiniCssExtractPlugin.loader },
						{ loader: "css-loader" },
						{ loader: "sass-loader" },
						{
							loader: "postcss-loader",
							options: {
								config: {
									path: '../webpack-configuration/postcss.config.js'
								}
							}
						},
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
		plugins: [
			new CleanWebpackPlugin([BUILD_DIR], {
				root: ROOT_DIR,
			}),
			new DuplicatePackageCheckerPlugin({ verbose: true }),
			new WriteFilePlugin(),
			new MiniCssExtractPlugin({
				filename: "styles.css",
			}),
			new CopyWebpackPlugin([
				{
					from: path.join(SOURCE_DIR, 'html'),
					to: BUILD_DIR,
				},
				{
					from: path.join(SOURCE_DIR, 'assets'),
					to: path.join(BUILD_DIR, 'assets'),
				},
			]),
		],
		devServer: {
			compress: true,
			port: 8080,
			contentBase: BUILD_DIR,
			publicPath: BUILD_DIR,
			quiet: false,
			noInfo: false,
			stats: {
				assets: false,
				children: false,
				chunks: false,
				chunkModules: false,
				colors: true,
				entrypoints: false,
				hash: false,
				modules: false,
				timings: false,
				version: false,
			},
		},
	}
};

module.exports = build;
