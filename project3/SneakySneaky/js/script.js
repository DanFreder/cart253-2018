/*****************

Sneaky Tubers
Dan Freder

semi-transparent circles leave trails on the canvas as they worm around
mic input triggers faster x axis accelerations

******************/
var x;
var y;
var vx;
var vy;
var maxSpeed = 3;
var tx;
var ty;

var circle;

var mic;

function preload() {}

function setup() {
  // Create a canvas the size of the window
  canvas = createCanvas(windowWidth, windowHeight);
  background(50);
  // Style it so it sits fixed behind HTML & ignores scrolling
  canvas.style("display:block");
  canvas.style("position:fixed");
  canvas.style("top:0");
  canvas.style("left:0");
  canvas.style("z-index:-100");

  mic = new p5.AudioIn();

  circle = new Circle(windowWidth / 2, windowHeight / 2, 200);
  mic.start();
}

function draw() {

  //display all the circles
  circle.update();
  circle.display();
}

function windowResized() {
  // resize our canvas to the new window dimensions
  resizeCanvas(windowWidth, windowHeight);
  background(50);
}
