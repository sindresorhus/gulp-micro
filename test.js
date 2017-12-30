import test from 'ava';
import Vinyl from 'vinyl';
import m from '.';

test.cb('limits the size of a module', t => {
	const stream = m({limit: 1000});

	stream.once('error', err => {
		t.regex(err.message, /fixture\.js/);
		t.end();
	});

	stream.end(new Vinyl({
		path: 'fixture.js',
		contents: Buffer.alloc(1234)
	}));
});
