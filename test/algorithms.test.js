/*
 * Algorithm Tests
 */

 var geom = require('../geometry'),
     algorithms = require('../algorithms'),
     assert = require('assert');

// Some bits and pieces for testing
var point1, point2, point3, point4, poly1;

point1 = new geom.Point2d(0, 0);
point2 = new geom.Point2d(10, 0);
point3 = new geom.Point2d(10, 12);
point4 = new geom.Point2d(0, 12);

poly1 = new geom.Polygon2d([point1, point2, point3, point4]);


describe('Algorithms', function() {
  describe('Polygon2dDecomp', function() {
    it('should return an array of 2d line segments', function() {
      var array = algorithms.polygon2dDecomp(poly1);

      assert.equal(array[1].vertices[0].x, 10);
      assert.equal(array[2].vertices[0].y, 12);
      assert.equal(array[2].vertices[1].x, 0);
    });
  });
});
