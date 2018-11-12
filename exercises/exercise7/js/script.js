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
var o1x = random(1);
var o1y = random(1);
var o1z = random(1);
var o2x = random(1);
var o2y = random(1);
var o2z = random(1);
var o3x = random(1);
var o3y = random(1);
var o3z = random(1);
}
function draw() {
  background(0);

  ///stylish rectangles
  push();
  translate(0,0,0);
  strokeWeight(2);
  stroke(36,123,160);
  fill(0);
  rectMode(CENTER);
  rect(5,5,windowWidth - 300, windowHeight - 200);
  rect(-5,-5,windowWidth - 300, windowHeight - 200);
  rect(0,0,windowWidth - 300, windowHeight - 200);
  pop();

///BLUE CUBE
  push();
  translate(-10, -5, -3);
    strokeWeight(1);
    stroke(0);
  rotateX(o1x);
  rotateY(o1y);
  rotateZ(o1z);
  fill(10,36,99);
  box(300, 300, 300,1,1);
  o1x += .002;
  o1y += .004;
  o1z += .003;
  pop();

///RED CUBE
  push();
  translate(10, 0, 3);
    strokeWeight(1);
      stroke(0);
  rotateX(o1x);
  rotateY(o1y);
  rotateZ(o1z);
  fill(251,54,64);
  box(300, 300, 300,1,1);
  o2x += .004;
  o2y += .003;
  o2z += .002;
  pop();

///GREY CUBE
  push();
  translate(0, 0, 0);
  strokeWeight(1);
    stroke(0);
  rotateX(o3x);
  rotateY(o3y);
  rotateZ(o3z);
  fill(96,95,94);
  box(300, 300, 300,1,1);
  o3x += .003;
  o3y += .002;
  o3z += .004;
  pop();

}
