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

var numLines = 11;

function draw() {
  background(0);

  push();
  for (var i = 0; i < numLines; i++) {
//fill(251,54,64,1);
noFill();
    stroke(251,54,64,255);
    strokeWeight(2);
    //  bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    bezier(0, windowHeight/2,
      windowWidth/2 + mouseX/2, windowHeight / 2 - mouseY,
      mouseX/2, mouseY/2,
      windowWidth, windowHeight - mouseY/2);
    translate(0, 20, 0);
  }
  pop();

//Lines on upper half of frame
  push();
  for (var i = 0; i < numLines; i++) {
  // fill(36,123,160,1);
noFill();
    stroke(36,123,160,255);
    strokeWeight(2);
    //  bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    bezier(0, windowHeight/2,
      windowWidth/2 + mouseX/2, windowHeight / 2 + mouseY,
      mouseX/2, mouseY/2,
      windowWidth, windowHeight + mouseY/2);
    translate(0, -20, 0);
  }
  pop();
}

function windowResized() {
  // resize our canvas to the new window dimensions
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
