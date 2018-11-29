/*****************

Tracer
Dan Freder

Use the cursor to trace points delineating a vanishing point

******************/
var cw = 0;

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
  var numRects = 30;

  mouseX = map(mouseX,0,windowWidth,windowWidth/2-20,windowWidth/2+20);
  mouseY = map(mouseY,0,windowHeight,windowHeight/2-10,windowHeight/2+10);

  var xc = mouseX - windowWidth/2;
  var yc = mouseY - windowHeight/2;

//  var xc = map(xc,0,mouseX-windowWidth/2,windowWidth/2-100,windowWidth/2+100);
//  var yc = map(yc,0,mouseY-windowHeight/2,windowHeight/2-100,windowHeight/2+100);

  translate(windowWidth/2, windowHeight/2);

  for (var i = 0; i < numRects; i++) {

    var x = windowWidth/2 - xReduction;
    var y = windowHeight/2 - yReduction;

    push()
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(0, 0, 0,255);
    ellipse(0,0,x,y);
    pop();

    xReduction += 16;
    yReduction += 9;

    translate(xc,yc,cw);

    cw++;

}
}
  function windowResized() {
    // resize our canvas to the new window dimensions
    resizeCanvas(windowWidth, windowHeight);
    background(0);
  }
