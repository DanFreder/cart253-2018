/*****************

Sneaky Tubers
Dan Freder

4 semi-transparent circle-sets leave trails on the canvas

******************/
var x;
var y;
var vx;
var vy;
var maxSpeed = 4;
var tx;
var ty;

var circle;
var circle2;
var circle3;
var circle4;
var mic;

function preload() {}

function setup() {
  // Create a canvas the size of the window
  canvas = createCanvas(windowWidth, windowHeight);
  background(100);
  // Style it so it sits fixed behind HTML & ignores scrolling
  canvas.style("display:block");
  canvas.style("position:fixed");
  canvas.style("top:0");
  canvas.style("left:0");
  canvas.style("z-index:-100");

  mic = new p5.AudioIn();

  circle = new Circle(windowWidth / 2, windowHeight / 2 + 150, 100);
  circle2 = new Circle(windowWidth / 2, windowHeight / 2, 100);
  circle3 = new Circle(windowWidth / 2, windowHeight / 2 - 150,100);
mic.start();
}

function draw() {

  //display all the circles
  circle.update();
  circle2.update();
 circle3.update();


  circle.display();
  circle2.display();
  circle3.display();
}

function windowResized() {
  // resize our canvas to the new window dimensions
  resizeCanvas(windowWidth, windowHeight);
  background(100);
}
