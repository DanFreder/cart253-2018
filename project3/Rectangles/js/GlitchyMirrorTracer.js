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

  xReduction = 0;
  yReduction = 0;

  var numRects = 40;

  translate(windowWidth/2, windowHeight/2);

  for (var i = 0; i < numRects; i++) {

    var x = windowWidth/2 - xReduction;
    var y = windowHeight/2 - yReduction;

    constrain(mouseX,0,windowWidth);
    constrain(mouseY,0,windowHeight);

    var xc = mouseX - windowWidth/2;
    var yc = mouseY - windowHeight/2;


    push()
    rectMode(CENTER);
    strokeWeight(1);
    stroke(36, 123, 160);
    fill(0, 0, 0, 255);
    rect(x, y,0,0);
    pop();

    xReduction += 20;
    yReduction += 10;



    translate(xc - windowWidth / 2, yc - windowHeight / 2);

}
}
  function windowResized() {
    // resize our canvas to the new window dimensions
    resizeCanvas(windowWidth, windowHeight);
    background(0);
  }
