/*****************

triGrid
Dan Freder

a grid of triangles...someday

******************/

var numTriangles = 100;
var tris = [];
var aX = -100;
var aY = -57.7533333333;
var bX = 0;
var bY = 115.5066666666;
var cX = 100;
var cY = -57.7533333333;
var offsetX = 0;
var offsetY = 0;
var noiseBase = 0;

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
    tris[i] = new Triangle(0,0,1);
    }
}

function draw() {
background(255);
translate(0,windowHeight/2);
noiseBase += .001;
for (var i = 0; i < tris.length; i++) {
translate(20,0);
tris[i].update();
tris[i].display();
}
}

function windowResized() {
  // resize our canvas to the new window dimensions
  resizeCanvas(windowWidth, windowHeight);
  background(255);
}
