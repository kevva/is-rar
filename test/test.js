'use strict';

var isRar = require('../');
var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');

test('should detect RAR from buffer', function (t) {
    t.plan(2);

    readChunk(path.join(__dirname, 'fixtures/test.rar'), 0, 8, function (err, buf) {
        t.assert(!err);
        t.assert(isRar(buf));
    });
});
