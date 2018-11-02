var sunAngle = 0;
var moonAngle = 0;
var earthAngle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {

  strokeWeight(1);
  background(0);

  push();
translate(0,0,-10);
  rotateZ(earthAngle);
  fill(226,226,226, 230);
    box(300, 300, 300);
  earthAngle += .003;
pop();

push();
translate(0,0,10);
  rotateX(moonAngle);
  fill(251,54,64, 230);
  box(300, 300, 300);
  moonAngle += .002;
  pop();

  rotateY(sunAngle);
  fill(10,36,99,230);
  box(300, 300, 300);
  sunAngle += .001;
}
