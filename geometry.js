geom = function ()
{
  this.version = '0.0.1';
}


/*
 * @class Point2d
 * @constructor
 * @param {Number} x - x coordinate
 * @param {Number} y - y coordinate
 */
geom.Point2d = function (x, y)
{
  this.x = x;
  this.y =y;
}


/*
 * @param {Point2d} a - Point2d to add
 * @param {Point2d} b - Point2d to add
 * @return {Point2d} New Point2d
 */
geom.Point2d.add = function (a, b)
{
  return new geom.Point2d(a.x + b.x, a.y + b.y);
}


/*
 * @param {Point2d} a - subtractor
 * @param {Point2d} b - subtractee
 * @return {Point2d} New Point2d
 */
geom.Point2d.subtract = function (a, b)
{
  return new geom.Point2d(b.x - a.x, b.y - a.y);
}


/*
 * @param {Number} x - x coordinate
 * @param {Number} y - y coordinate
 */
geom.Point2d.prototype.set = function set (x, y)
{
  this.x = x;
  this.y = y;
}


geom.Point2d.prototype.coordsArray = function coordsArray()
{
  return [this.x, this.y];
}


/*
 * @class Polygon2d
 * @constructor
 * @param {Array} vertices - An array of Point2d objects
 */
geom.Polygon2d = function Polygon2d (vertices)
{
  this.vertices = vertices || [];
}


/*
 * @param {Object} polygon - Polygon2d object
 * @returns {Number} - Signed area of given polygon
 */
geom.Polygon2d.signedArea = function (polygon)
{
  var count = polygon.vertexCount();
  var area = 0.0;

  var i, current, next;
  for (i = 0; i < count; i++) {
    current = polygon.vertices[i];
    next = polygon.vertices[(i + 1) % count];
    area += current.x * next.y - next.x * current.y;
  }

  area /= 2;

  return area;
}


/*
 * @param {Polygon2d} polygon - Polygon2d object
 * @param {Point2d} basePoint - basePoint from which to move polygon
 * @param {Point2d} dest - destination point
 * @return {Polygon2d} New Polygon2d
 */
geom.Polygon2d.prototype.move = function (basePoint, dest)
{
  var moveVector, count;

  count = this.vertexCount();

  moveVector = geom.Vector2d.subtract(basePoint || this.vertices[count - 1], dest);

  var i;
  for (i = 0; i < count; i++) {
    this.vertices[i] = geom.Vector2d.add(moveVector, this.vertices[i]);
  }
}


/*
 * @param {Polygon2d}
 * @return {Polygon2d} New Polygon2d
 */
geom.Polygon2d.reverseOrientation = function (polygon)
{
  var count, result;

  count = polygon.vertexCount();
  result = new geom.Polygon2d();

  var i, current;
  for (i = count - 1; i >= 0; i--) {
    result.addvertex(polygon.vertices[i].x, polyogn.vertices[i].y);
  }

  return result;
}


/*
 * @param {Number} x - x coordinate
 * @param {Number} y - y coordinate
 */
geom.Polygon2d.prototype.addVertex = function (x, y)
{
  this.vertices.push(new geom.Point2d(x, y));
}


geom.Polygon2d.prototype.set = function set (vertices)
{
  this.vertices = vertices;
}

/*
 * @return {Number}
 */
geom.Polygon2d.prototype.vertexCount = function ()
{
  return this.vertices.length;
}


/*
 * @class Segment2d
 */
geom.Segment2d = function (vertices)
{
  this.vertices = vertices || [];
}

/*
 * @class Vector2d
 */
geom.Vector2d = geom.Point2d;


/*
 * @param {Vector2d} a - Vector2d to add
 * @param {Vector2d} b - Vector2d to add
 * @return {Vector2d} New Vector2d
 */

geom.Vector2d.prototype = geom.Point2d.prototype;


module.exports = geom;
