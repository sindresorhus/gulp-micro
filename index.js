import prettyBytes from 'pretty-bytes';
import {gulpPlugin} from 'gulp-plugin-extras';

export default function gulpMicro({limit} = {}) {
	if (typeof limit !== 'number') {
		throw new TypeError('gulp-micro: `limit` required');
	}

	return gulpPlugin('gulp-micro', file => {
		const size = file.contents.length;

		if (size > limit) {
			const error = new Error(`${file.relative} (${prettyBytes(size)}) exceeds limit of ${prettyBytes(limit)} by ${prettyBytes(size - limit)}`);
			error.isPresentable = true;
			throw error;
		}

		return file;
	});
}
