var o1x = 0;
var o1y = 0;
var o1z = 0;
var o2x = 0;
var o2y = 0;
var o2z = 0;
var o3x = 0;
var o3y = 0;
var o3z = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {

  strokeWeight(1);
  background(0);

  push();
  translate(0, 0, -10);
  rotateX(o1x);
  rotateY(o1y);
  rotateZ(o1z);
  fill(226, 226, 226, 230);
  box(300, 300, 300);
  o1x += .003;
  o1y += .004;
  o1z += .005;
  pop();

  push();
  translate(0, 0, 10);
  rotateX(o1x);
  rotateY(o1y);
  rotateZ(o1z);
  fill(251, 54, 64, 230);
  box(300, 300, 300);
  o2x += .005;
  o2y += .004;
  o2z += .003;
  pop();

  push();
  translate(0, 0, 10);
  rotateX(o3x);
  rotateY(o3y);
  rotateZ(o3z);
  fill(10, 36, 99, 230);
  box(300, 300, 300);
  o3x += .004;
  o3y += .003;
  o3z += .005;
  pop();

}
