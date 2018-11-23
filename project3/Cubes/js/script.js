/*****************

Cubes
Dan Freder

rotating cubes create 2.5D illusions

******************/

var o1x = 0;
var o1y = 0;
var o1z = 0;
var cubes;

function preload() {}

function setup() {
  // Create a canvas the size of the window
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  // Style it so it sits fixed behind HTML & ignores scrolling
  canvas.style("display:block");
  canvas.style("position:fixed");
  canvas.style("top:0");
  canvas.style("left:0");
  canvas.style("z-index:-100");
  background(0);

  var o1x = random(0, 10000);
  var o1y = random(0, 10000);
  var o1z = random(0, 10000);

  cubes = new Cubes(0, 0, 550);
}

function draw() {
  background(0);
  cubes.display();
}

function windowResized() {
  // resize our canvas to the new window dimensions
  resizeCanvas(windowWidth, windowHeight);
}
