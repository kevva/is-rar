# is-rar [![Build Status](http://img.shields.io/travis/kevva/is-rar/master.svg?style=flat)](https://travis-ci.org/kevva/is-rar)

> Check if a Buffer/Uint8Array is a RAR file


## Install

```
$ npm install --save is-rar
```


## Usage

```js
var isRar = require('is-rar');
var read = require('fs').readFileSync;

isRar(read('foo.rar'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
