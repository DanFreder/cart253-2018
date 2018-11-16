/// a series of minimalist vector graphics by Dan Freder
/// atm I'm separating the different scenes into different objects

var o1x = 0;
var o1y = 0;
var o1z = 0;
var edge = 0;
var numRects = 5;
var cubes;
var polySpheres;
var blueRects;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  var o1x = random(0, 10000);
  var o1y = random(0, 10000);
  var o1z = random(0, 10000);

  cubes = new Cubes(0, 0, 500,2);
  polySpheres = new PolySphere(0,0,550,0);
  blueRects = new BlueRectangles();
}

function draw() {
  background(0);



//  cubes.display();
  blueRects.display();
//  polySpheres.display();
}
