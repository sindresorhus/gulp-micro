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
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-micro', 'Streaming not supported'));
			return cb();
		}

		var size = file.contents.length;
		var limit = options.limit;

		if (size > limit) {
			this.emit('error', new gutil.PluginError('gulp-micro', file.relative + ' (' + prettyBytes(size) + ') ' + 'exceeds limit of ' + prettyBytes(limit) + ' by ' + prettyBytes(size - limit)));
		}

		this.push(file);
		cb();
	});
};
