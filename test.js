'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var micro = require('./');

it('should limit the size of a module', function (cb) {
	var stream = micro({limit: 1000});

	stream.on('error', function (err) {
		assert(/fixture\.js/.test(err));
		cb();
	});

	stream.write(new gutil.File({
		path: 'fixture.js',
		contents: new Buffer(1234)
	}));
});
