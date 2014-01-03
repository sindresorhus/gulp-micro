# [gulp](http://gulpjs.com)-micro [![Build Status](https://secure.travis-ci.org/sindresorhus/gulp-micro.png?branch=master)](http://travis-ci.org/sindresorhus/gulp-micro)

> Ensure your micro-lib stays micro

![](screenshot.png)

Useful when paired with TravisCI to verify that all pull-requests are within the size limit.


## Install

Install with [npm](https://npmjs.org/package/gulp-micro)

```
npm install --save-dev gulp-micro
```


## Example

```js
var gulp = require('gulp');
var micro = require('gulp-micro');

gulp.task('default', function () {
	gulp.src('src/app.js')
		.pipe(micro({limit: 1000}))
		.pipe(gulp.dest('dist'));
});
```


## Options

### limit

*Required*  
Type: `Number`

File size limit in bytes.


## Tip

Place [gulp-gzip](https://github.com/jstuckey/gulp-gzip) before this plugin to limit the gzipped size.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
