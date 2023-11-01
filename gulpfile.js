import gulp from 'gulp';
import micro from './index.js';

export default function main() {
	return gulp.src('index.js')
		.pipe(micro({limit: 1}))
		.pipe(gulp.dest('dest'));
}
