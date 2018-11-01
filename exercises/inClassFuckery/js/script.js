var sunAngle = 0;
var moonAngle = 0;
var earthAngle = 0;

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(0);
  ///SUN///
  rotateY(sunAngle);
  fill(255, 255, 0, 255);
  box(100, 100, 100);
  sunAngle += 0.01;
}
