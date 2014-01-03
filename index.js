'use strict';
var gutil = require('gulp-util');
var map = require('map-stream');
var filesize = require('filesize');

filesize = function (size) {return this.call(this, size, {spacer: ''})}.bind(filesize);

module.exports = function (options) {
	options = options || {};

	if (typeof options.limit !== 'number') {
		throw new Error('gulp-micro: `limit` required.');
	}

	return map(function (file, cb) {
		if (file.isNull()) {
			return cb(null, file);
		}

		var size = file.contents.length;
		var limit = options.limit;

		if (size > limit) {
			return cb(new Error('gulp-micro: ' + file.relative + ' (' + filesize(size) + ') ' + 'exceeds limit of ' + filesize(limit) + ' by ' + filesize(size - limit)));
		}

		cb(null, file);
	});
};
