/*****************
curvy
Dan Freder

Bezier Curves follow mouse position
******************/

var click = 0;

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

var numLines = 30;

function draw() {
  noCursor();
  background(30);
  if (mouseIsPressed || keyIsDown(32))  {
    click = 50;
    background(245,183,0);
  } else {
    click = 0;
    background(0);
  }

//BLUE LINES
  push();
  for (var i = 0; i < numLines; i++) {
fill(0,139,248,click);
    stroke(0,139,248,255);
    strokeWeight(2);
    //  bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    bezier(-800, windowHeight/2-600,
      windowWidth/2 + mouseX, windowHeight / 2 - mouseY,
      windowWidth/2 + mouseX, windowHeight / 2 - mouseY,
      windowWidth+300, windowHeight+300);
    translate(1, 25, 0);
  }
  pop();

//RED LINES
  push();
    for (var i = 0; i < numLines; i++) {
    fill(220,0,115,click);
    stroke(220,0,115,255);
    strokeWeight(2);
    //  bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    bezier(-800, windowHeight/2+600,
      windowWidth/2 + mouseX, windowHeight / 2 + mouseY,
      windowWidth/2 + mouseX, windowHeight / 2 + mouseY,
      windowWidth+300, windowHeight-300);
    translate(1, -25, 0);
  }
  pop();
}

function windowResized() {
  // resize our canvas to the new window dimensions
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
