var o1x = 0;
var o1y = 0;
var o1z = 0;
var edge = 0;
var numRects = 5;
var cubes;
var polySphere;
var blueRects;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  var o1x = random(0, 1000);
  var o1y = random(0, 1000);
  var o1z = random(0, 1000);

  cubes = new Cubes(0,0,300,10);
  polySphere = new PolySphere(0,0,600,10);
  blueRects = new BlueRectangles(0,0,5);
}

function draw() {
  background(0);

polySphere.update();
cubes.update();
blueRects.update();

polySphere.display();
cubes.display();
blueRects.display();
}
