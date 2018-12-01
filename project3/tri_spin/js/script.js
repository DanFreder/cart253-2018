/*****************

Triangle Describes a Hole
Dan Freder

******************/

var tri;
var aX = -100
var aY = 100
var bX = 0
var bY = -150
var cX = 100
var cY = 100

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

tri = new Triangle();

}

function draw() {
  tri.display();
}

function windowResized() {
  // resize our canvas to the new window dimensions
  resizeCanvas(windowWidth, windowHeight);
  background(50);
}
