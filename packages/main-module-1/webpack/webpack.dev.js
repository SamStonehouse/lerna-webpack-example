const path = require('path');
const merge = require('webpack-merge');

const configBuilders = require('@lerna-test/webpack-configuration');

const ROOT_DIR = path.resolve(__dirname, '..');
const SOURCE_DIR = path.resolve(ROOT_DIR, 'source');
const BUILD_DIR = path.resolve(ROOT_DIR, 'dev-dist');

module.exports = merge(configBuilders.devBuilder(ROOT_DIR, SOURCE_DIR, BUILD_DIR), {
	entry: path.join(SOURCE_DIR, 'scripts', 'index.js'),
	output: {
		path: path.join(BUILD_DIR, 'assets'),
		filename: 'bundle.js',
		publicPath: 'assets/',
	},
});
