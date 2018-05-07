const merge = require('webpack-merge');
const commonBuilder = require('./common-builder.js');

/**
 * Creates a production webpack configuration object when provided with a root directory, source directory and build directory
 *
 * Directories should be relative to where the webpack executatble is running from
 *
 * @param {String} ROOT_DIR
 * @param {String} SOURCE_DIR
 * @param {String} BUILD_DIR
 */
const prodBuilder = (ROOT_DIR, SOURCE_DIR, BUILD_DIR) => {
	const common = commonBuilder(ROOT_DIR, SOURCE_DIR, BUILD_DIR);

	return merge(common, {
		mode: 'production'
	});
};

module.exports = prodBuilder;
