/*****************

Nu triangle Shit???
Dan Freder

******************/

var numTriangles = 10;
var triangles = [];

var aX = -500;
var aY = -280.8676666667;
var bX = 10;
var bY = 570.7353333333;
var cX = 500;
var cY = -280.8676666667;

function preload() {}

function setup() {
  // Create a canvas the size of the window
  canvas = createCanvas(windowWidth, windowHeight);
  background(30);
  // Style it so it sits fixed behind HTML & ignores scrolling
  canvas.style("display:block");
  canvas.style("position:fixed");
  canvas.style("top:0");
  canvas.style("left:0");
  canvas.style("z-index:-100");


for (var i = 0; i < numTriangles; i++) {

  if (i % 3 === 1) {
  triangles[i] = new Triangle(0,0,(abs(random(-1,1))));
}
  else if (i % 2 === 1) {
    triangles[i] = new Triangle(-300,0,(abs(random(-1,1))));
  }
  else {
    triangles[i] = new Triangle(300,0,(abs(random(-1,1))));
}
}
}

function draw() {
translate(windowWidth/2,windowHeight/2);
  for (var i = 0; i < numTriangles; i++) {
triangles[i].update();
  triangles[i].display();
}
}

function windowResized() {
  // resize our canvas to the new window dimensions
  resizeCanvas(windowWidth, windowHeight);
  background(50);
}
