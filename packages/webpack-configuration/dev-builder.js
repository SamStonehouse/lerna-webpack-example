const merge = require('webpack-merge');
const commonBuilder = require('./common-builder.js');

/**
 * Creates development a webpack configuration object when provided with a root directory, source directory and build directory
 *
 * Directories should be relative to where the webpack executatble is running from
 *
 * @param {String} ROOT_DIR
 * @param {String} SOURCE_DIR
 * @param {String} BUILD_DIR
 */
const devBuilder = (ROOT_DIR, SOURCE_DIR, BUILD_DIR) => {
	const common = commonBuilder(ROOT_DIR, SOURCE_DIR, BUILD_DIR);

	return merge(common, {
		mode: 'development',
		devtool: "inline-cheap-module-source-map"
	});
};

module.exports = devBuilder;
