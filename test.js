var csg = require('csg')
var test = require('tape')

var translate = require('./')

test('translate a cube', function (t) {
  var cube = csg.cube()
  t.deepEqual(
    cube,
    translate(
      translate(
        cube,
        { x: 1, y: 1, z: 1 }
      ),
      { x: -1, y: -1, z: -1 }
    )
  )
  t.end()
})
