/*
 * Line Segment intersection
 */


/*
 * Polygon Decomposer
 * Decomposes a Polygon2d into an array of Segment2ds.
 */

exports.polygon2dDecomp = function (polygon)
{
  var count, result, segment, start, end;

  count = polygon.vertexCount();

  result = [];

  var i, current;
  for (i = 0; i < count; i++) {
    start = polygon.vertices[i];
    end = polygon.vertices[(i + 1) % count];

    start = new geom.Point2d(start.x, start.y);
    end = new geom.Point2d(end.x, end.y);

    result.push(new geom.Segment2d([start, end]));
  }

  return result;
}
