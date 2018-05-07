const path = require('path');
const merge = require('webpack-merge');

const configBuilders = require('@lerna-test/webpack-configuration');

const ROOT_DIR = path.resolve(__dirname, '..');
const SOURCE_DIR = path.resolve(ROOT_DIR, 'source');

module.exports = merge(configBuilders.testBuilder(ROOT_DIR, SOURCE_DIR), {
	entry: path.join(SOURCE_DIR, 'scripts', 'index.js'),
});
