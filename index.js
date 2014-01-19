'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var filesize = require('filesize');

filesize = function (size) {return this.call(this, size, {spacer: ''})}.bind(filesize);

module.exports = function (options) {
	options = options || {};

	if (typeof options.limit !== 'number') {
		throw new Error('gulp-micro: `limit` required.');
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
			this.emit('error', new gutil.PluginError('gulp-micro', file.relative + ' (' + filesize(size) + ') ' + 'exceeds limit of ' + filesize(limit) + ' by ' + filesize(size - limit)));
		}

		this.push(file);
		cb();
	});
};
