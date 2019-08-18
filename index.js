'use strict';
const through = require('through2');
const prettyBytes = require('pretty-bytes');
const PluginError = require('plugin-error');

module.exports = (options = {}) => {
	if (typeof options.limit !== 'number') {
		throw new TypeError('gulp-micro: `limit` required');
	}

	return through.obj((file, encoding, callback) => {
		if (file.isNull()) {
			callback(null, file);
			return;
		}

		if (file.isStream()) {
			callback(new PluginError('gulp-micro', 'Streaming not supported'));
			return;
		}

		const size = file.contents.length;
		const {limit} = options;

		if (size > limit) {
			callback(new PluginError('gulp-micro', `${file.relative} (${prettyBytes(size)}) exceeds limit of ${prettyBytes(limit)} by ${prettyBytes(size - limit)}`, {
				fileName: file.path,
				showStack: false
			}));
			return;
		}

		callback(null, file);
	});
};
