/*****************
Rectangles
Dan Freder
repeating rectangles scale with cursor position
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

function draw() {
  //  noCursor();
  translate(windowWidth / 2, windowHeight / 2);
  xReduction = 0;
  yReduction = 0;
  var numRects = 40;

  y = constrain(x,0,windowWidth/2);
  x = constrain(y,0,windowHeight/2);

  for (var i = 0; i < numRects; i++) {
    var x = windowWidth - xReduction;
    var y = windowHeight - yReduction;
    var xc = map(mouseX,0,windowWidth,windowWidth/2 - 15., windowWidth/2 + 15.);
    var yc = map(mouseY,0,windowHeight,windowHeight/2 - 10.,windowHeight/2 + 10.);

    push()
    rectMode(CENTER);
    strokeWeight(1);
    stroke(36, 123, 160);
    fill(0, 0, 0, 255);
    rect(0, 0, x, y);
    pop();
    xReduction += 32;
    yReduction += 16;
    translate(xc - windowWidth / 2, yc - windowHeight / 2);

}
}
  function windowResized() {
    // resize our canvas to the new window dimensions
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}
