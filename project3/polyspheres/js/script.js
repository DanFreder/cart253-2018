/*****************

Low Polygon Spheres
Dan Freder

large rotating spheres seen from inside-out
move around with the arrow keys, cancel background clear w/click or space

******************/

var o1x = 0;
var o1y = 0;
var o1z = 0;
var polySphere;
var pan = 0;
var tilt = 0;

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

  var o1x = random(1);
  var o1y = random(1);
  var o1z = random(1);

//create Polysphere (Xposition,Yposition,Size)
//Size is big so we are inside the spheres
  polySphere = new Polysphere(0, 0, 900);
}

function draw() {

//Camera controls
rotateX(tilt);
rotateY(pan);

if (keyIsDown(LEFT_ARROW)) {
  pan -= 0.02;
}
else if (keyIsDown(RIGHT_ARROW)) {
  pan += 0.02;
}
if (keyIsDown(UP_ARROW)) {
  tilt += 0.02;
}
else if (keyIsDown(DOWN_ARROW)) {
  tilt -= 0.02;
}

//Cancel background clearing on mousepress
if (mouseIsPressed || keyIsDown(32)) {
    polySphere.display();
  }
  else {
  background(0);
  polySphere.display();
}
}

function windowResized() {
  // resize our canvas to the new window dimensions
  resizeCanvas(windowWidth, windowHeight);
}
