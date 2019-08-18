import test from 'ava';
import Vinyl from 'vinyl';
import pEvent from 'p-event';
import micro from '.';

test('limits the size of a module', async t => {
	const stream = micro({limit: 1000});
	const errorPromise = pEvent(stream);

	stream.end(new Vinyl({
		path: 'fixture.js',
		contents: Buffer.alloc(1234)
	}));

	await t.throwsAsync(errorPromise, {message: /fixture\.js/});
});
