# [gulp](http://gulpjs.com)-micro [![Build Status](https://travis-ci.org/sindresorhus/gulp-micro.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-micro)

> Ensure your micro-lib stays micro

![](screenshot.png)

Useful when paired with TravisCI to verify that all pull-requests are within the size limit.


## Install

```sh
$ npm install --save-dev gulp-micro
```


## Usage

```js
var gulp = require('gulp');
var micro = require('gulp-micro');

gulp.task('default', function () {
	return gulp.src('src/app.js')
		.pipe(micro({limit: 1000}))
		.pipe(gulp.dest('dist'));
});
```


## Options

### limit

*Required*  
Type: `number`

File size limit in bytes.


## Tip

Place [gulp-gzip](https://github.com/jstuckey/gulp-gzip) before this plugin to limit the gzipped size.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
