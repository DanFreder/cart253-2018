/*****************

//Dan Freder uses this in-class to follow along / dick around

******************/
var x = 0;
var y = 0;
var tx = 250;
var ty = 200;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);

  x = width * noise(tx);
  y = height * noise(ty);

  tx += 0.01;
  ty += 0.01;

  ellipse(x,y,10,10);
}
