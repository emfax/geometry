var geom = require('./geometry');


var point1, point2, point3;

point1 = new geom.Point2d(0, 0);
point2 = new geom.Point2d(10, 1);
point3 = new geom.Point2d(5, 12);

array = [point1, point2, point3];

var poly1 = new geom.Polygon2d(array);

console.log(geom.Polygon2d.signedArea(poly1));
console.log(poly1);

var pointFrom, pointTo
pointFrom = new geom.Point2d(1, 0);
pointTo = new geom.Point2d(15, 8);

poly1.move(pointFrom, pointTo);

console.log(poly1);
