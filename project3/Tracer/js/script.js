/*****************

Tracer
Dan Freder

Squiggly Giggly Goop

******************/

function preload() {}

function setup() {
  // Create a canvas the size of the window
  canvas = createCanvas(windowWidth, windowHeight);
  // Style it so it sits fixed behind HTML & ignores scrolling
  canvas.style("display:block");
  canvas.style("position:fixed");
  canvas.style("top:0");
  canvas.style("left:0");
  canvas.style("z-index:-100");
  background(0);
}

var numLines = 100;

function draw() {
  background(0);

  push();
  for (var i = 0; i < numLines; i++) {
    noFill();
    stroke(255);
    strokeWeight(1);
    //  bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    bezier(0, windowHeight / 2+300,
      windowWidth / 2 + mouseX/2, windowHeight / 2 - mouseY,
      mouseX/2, mouseY/2,
      windowWidth+mouseX/2, windowHeight / 2 + mouseY/2);
    translate(0, 10, 0);
  }
  pop();

  push();
  for (var i = 0; i < numLines; i++) {
    noFill();
    stroke(255);
    strokeWeight(1);
    //bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    bezier(0, windowHeight / 2+300,
      windowWidth / 2 + mouseX/2, windowHeight / 2 - mouseY,
      mouseX/2, mouseY/2,
      windowWidth+mouseX/2, windowHeight / 2 + mouseY/2);
    translate(0, -10, 0);
  }
  pop();


}

function windowResized() {
  // resize our canvas to the new window dimensions
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
