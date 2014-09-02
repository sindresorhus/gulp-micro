'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var chalk = require('chalk');
var prettyBytes = require('pretty-bytes');

module.exports = function (options) {
	options = options || {};

	if (typeof options.limit !== 'number') {
		throw new Error('gulp-micro: ' + chalk.bold('limit') + ' required.');
	}

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-micro', 'Streaming not supported'));
			return;
		}

		var size = file.contents.length;
		var limit = options.limit;

		if (size > limit) {
			cb(new gutil.PluginError('gulp-micro', file.relative + ' (' + prettyBytes(size) + ') ' + 'exceeds limit of ' + prettyBytes(limit) + ' by ' + prettyBytes(size - limit), {
				fileName: file.path,
				showStack: false
			}));
			return;
		}

		cb(null, file);
	});
};
