var csg = require('csg')

module.exports = translate

function translate (solid, vector) {
  return csg.fromPolygons(
    solid.toPolygons().map(function (polygon) {
      return new csg.Polygon(
        polygon.vertices.map(function (vertex) {
          return new csg.Vertex(
            vertex.pos.plus(vector),
            vertex.normal
          )
        }),
        polygon.shared
      )
    })
  )
}
