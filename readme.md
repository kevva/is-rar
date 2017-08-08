# is-rar [![Build Status](https://travis-ci.org/kevva/is-rar.svg?branch=master)](https://travis-ci.org/kevva/is-rar)

> Check if a Buffer/Uint8Array is a RAR file


## Install

```
$ npm install is-rar
```


## Usage

```js
const fs = require('fs);
const isRar = require('is-rar');

isRar(fs.readFileSync('foo.rar'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
