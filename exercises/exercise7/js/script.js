var o1x = 0;
var o1y = 0;
var o1z = 0;
var edge = 0;
var rects = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  var o1x = random(0,1000);
  var o1y = random(0,1000);
  var o1z = random(0,1000);
}

function draw() {
  background(0);

if (mouseIsPressed) {
  edge = 1;
  ///stylish rectangles
  for (var i = 0; i < rects; i++) {
  var xSize = random(100,200);
  var ySize = random(75,175);
  push()
  rectMode(CENTER);
  strokeWeight(1);
  stroke(36, 123, 160);
  fill(0);
  rect(0,0,windowWidth- xSize, windowHeight-ySize);
  pop();
}
}
else {
  edge = 0;
}

  ///BLUE CUBE
  o1x += .001;
  o1y += .002;
  o1z += .003;
  push();
  strokeWeight(edge);
  translate(-10, -5, -3);
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
  strokeWeight(edge);
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
  strokeWeight(edge);
  stroke(0);
  rotateX(o1x+frameCount/1000);
  rotateY(o1y+frameCount/1000);
  rotateZ(o1z+frameCount/1000);
  fill(251, 54, 64);
  box(300, 300, 300, 1, 1);
  pop();

/// LOW POLY SPHERE
  push();
  translate(0, 0, 0);
  strokeWeight(1);
  stroke(226);
  rotateX(frameCount/PI*5);
  fill(0,0,0,0);
  sphere(500, 4, 4);
  pop();

  // for (var i = 0; i < numRects; i++) {
//  var xSize = random(100,200);
//  var ySize = random(75,175);
//  push()
//  rectMode(CENTER);
//  strokeWeight(1);
  //  stroke(36, 123, 160);
//  fill(0);
///  rect(0,0,windowWidth- xSize, windowHeight-ySize);
///  pop();

}
