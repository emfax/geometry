/*
 * Geometry Tests
 */

 var geom = require('../geometry'),
     assert = require('assert');


// Some bits and pieces for testing
var point1, point2, point3;

point1 = new geom.Point2d(0, 0);
point2 = new geom.Point2d(10, 1);
point3 = new geom.Point2d(5, 12);


describe('Geometry', function() {
  describe('Point2d.subtract', function() {
    it('should return a new point', function() {
      var sub = geom.Point2d.subtract(point3, point2);

      assert.equal(sub.x, 5);
      assert.equal(sub.y, -11);
    });
  });

  describe('Point2d.add', function() {
    it('should return a new point', function() {
      var add = geom.Point2d.add(point3, point2);

      assert.equal(add.x, 15);
      assert.equal(add.y, 13);
    });
  });

  describe('Polygon2d.move', function() {
    it('should translate vertices to new positions', function() {
      var poly1, pointFrom, pointTo;

      poly1 = new geom.Polygon2d([point1, point2, point3]);

      pointFrom = new geom.Point2d(1, 0);
      pointTo = new geom.Point2d(15, 8);

      poly1.move(pointFrom, pointTo);

      assert.equal(poly1.vertices[0].x, 14);
    });

    it('use vertices[3] as base when null passed to base point', function() {
      var poly1, pointFrom, pointTo;

      poly1 = new geom.Polygon2d([point1, point2, point3]);

      dest = new geom.Point2d(15, 8);

      poly1.move(null, dest);

      assert.equal(poly1.vertices[0].x, 10);
      assert.equal(poly1.vertices[0].y, -4);
    });
  });
});
