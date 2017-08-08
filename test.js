import fs from 'fs';
import path from 'path';
import test from 'ava';
import m from '.';

test(t => {
	const buf = fs.readFileSync(path.join(__dirname, 'fixture.rar'));
	t.true(m(buf));
});
