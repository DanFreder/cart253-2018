/*****************

Tri-city
Dan Freder

An array of triangles rotate + leave trails on the canvas

******************/

var numTriangles = 75;
var triangles = [];

var aX = -400;
var aY = -344;
var bX = 0;
var bY = 348.84;
var cX = 400;
var cY = -344;

function setup() {
  // Create a canvas the size of the window
  canvas = createCanvas(windowWidth, windowHeight);
  // Style it so it sits fixed behind HTML & ignores scrolling
  canvas.style("display:block");
  canvas.style("position:fixed");
  canvas.style("top:0");
  canvas.style("left:0");
  canvas.style("z-index:-100");

for (var i = 0; i < numTriangles; i++) {

  if (i % 2 === 1) {
  triangles[i] = new Triangle(100*i,-10*i,random(-1,1)*1.5);
}
  else {
    triangles[i] = new Triangle(-100*i,10*i,random(-1,1)*1.5);
  }
}
background(0);
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
  background(0);
}
