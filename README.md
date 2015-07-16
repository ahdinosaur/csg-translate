# csg-translate

translate a [csg.js](https://npmjs.org/csg) solid by a `{ x, y, z }` vector.

## install

with [npm](https://npmjs.org), do:

```
npm i --save csg-translate
```

## usage

```
var csg = require('csg')
var translate = require('csg-translate')

var cube = csg.cube({
  center: [0, 0, 0],
  radius: [1, 2, 3]
})
var tCube = translate(
  cube,
  { x: 10, y: 10, z: 10 }
)
console.log(JSON.stringify(tCube, null, 2))
```

## license

ISC
