# gulp-micro

> Ensure your micro-lib stays micro

<img src="screenshot.png" width="643">

Useful when paired with a CI to verify that all pull-requests are within the size limit.

## Install

```
$ npm install --save-dev gulp-micro
```

## Usage

```js
const gulp = require('gulp');
const micro = require('gulp-micro');

exports.default = () => (
	gulp.src('src/app.js')
		.pipe(micro({limit: 1000}))
		.pipe(gulp.dest('dist'))
);
```

## API

## micro(options?)

### options

Type: `object`

#### limit

*Required*\
Type: `number`

File size limit in bytes.

## Tip

Place [gulp-gzip](https://github.com/jstuckey/gulp-gzip) before this plugin to limit the gzipped size.
