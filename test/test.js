/*global describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var isRar = require('../');
var path = require('path');

describe('isRar()', function () {
    function check(file) {
        return isRar(fs.readFileSync(file));
    }

    it('should detect RAR from buffer', function (cb) {
        assert(check(path.join(__dirname, 'fixtures/test.rar')));
        cb();
    });

    it('should detect RAR from Uint8Array', function () {
        var buf = new Uint8Array([82, 97, 114, 33, 26, 7, 1]);
        assert(isRar(buf));
    });
});
