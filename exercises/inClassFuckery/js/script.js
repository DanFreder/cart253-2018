var ball1;
var ball2;

function setup() {
  createCanvas(640, 480);
  ball1 = new Ball(10, 100, 5, -3, 10, 1);
  ball2 = new Ball(50, 200, -3, 5, 20, 1);
}

function draw() {
  background(0);
  ball1.update();
  ball1.display();
  ball2.update();
  ball2.display();
}
