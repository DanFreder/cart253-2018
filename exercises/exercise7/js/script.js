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
  var o1x = random(0,1000);
  var o1y = random(0,1000);
  var o1z = random(0,1000);
}

function draw() {
  background(0);

  ///stylish rectangles
  push();
  translate(0, 0, 0);
  strokeWeight(2);
  stroke(36, 123, 160);
  fill(0);
  rectMode(CENTER);
  rect(5, 5, windowWidth - 300, windowHeight - 200);
  rect(-5, -5, windowWidth - 300, windowHeight - 200);
  rect(0, 0, windowWidth - 300, windowHeight - 200);
  pop();

  ///BLUE CUBE
  o1x += .001;
  o1y += .002;
  o1z += .003;
  push();
  translate(-10, -5, -3);
  strokeWeight(1);
  stroke(0);
  rotateX(o1x);
  rotateY(o1y);
  rotateZ(o1z);
  fill(10, 36, 99);
  box(300, 300, 300, 1, 1);
  pop();

  ///GREY CUBE
  push();
  translate(0, 0, 0);
  strokeWeight(1);
  stroke(0);
  rotateX(o1x-100);
  rotateY(o1y-100);
  rotateZ(o1z-100);
  fill(96, 95, 94);
  box(300, 300, 300, 0, 0);
  pop();

  ///RED CUBE
  push();
  translate(10, 5, 3);
  strokeWeight(1);
  stroke(0);
  rotateX(o1x-200);
  rotateY(o1y-200);
  rotateZ(o1z-200);
  fill(251, 54, 64);
  box(300, 300, 300, 1, 1);
  pop();

}
