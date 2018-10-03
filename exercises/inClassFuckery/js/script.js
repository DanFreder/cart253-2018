var x;
var y;
var vx;
var vy;
var radius = 25;
var maxSpeed = 1;

function setup() {
  createCanvas(500,500);
  fill(255,0,0);
  noStroke();
  x = width/2;
  y = height/2;
  vx = speed;
  vy = -speed;
}

function draw() {
  background(100);
  x += vx;
  y += vy;
  ellipse(x,y,radius*2);
}
