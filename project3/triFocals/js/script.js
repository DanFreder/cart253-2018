/*****************

triFocals
Dan Freder

An array of rotating triangles.
Move your mouse to translate cross-canvas.

******************/

var numTriangles = 30;
var tris = [];
var aX = -500;
var aY = -288.766666666;
var bX = 0;
var bY = 577.5333333333;
var cX = 500;
var cY = -288.766666666;
this.offsetX = 0;
this.offsetY = 0;

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
    tris[i] = new Triangle(0, 0, i * 0.04);
  }
}

function draw() {
if (mouseIsPressed === true) {
}
else {
  background(245, 255, 201);
}
  //translate(windowWidth/2,windowHeight/2);
  for (var i = 0; i < tris.length; i++) {
    tris[i].update();
    tris[i].spin += .008;
    tris[i].display(275 - (i * 5));
    translate(mouseX / 8, mouseY / 6);
  }
}

function windowResized() {
  // resize our canvas to the new window dimensions
  resizeCanvas(windowWidth, windowHeight);
  background(255);
}
