'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var micro = require('./index');

it('should limit the size of a module', function (cb) {
	var stream = micro({limit: 1000});

	stream.on('error', function (err) {
		assert(/gulp-micro: fixture\.js/.test(err));
		cb();
	});

	stream.write(new gutil.File({
		path: __dirname + '/fixture.js',
		contents: new Buffer(1234)
	}));
});
