///stylish rectangles

var numRects = 52;

function BlueRectangles() {}

BlueRectangles.prototype.display = function() {
  xReduction = 150;
  yReduction = 150;

//  noCursor();
  for (var i = 0; i < numRects; i++) {
    var x = windowWidth - xReduction;
    var y = windowHeight - yReduction;
    constrain(mouseX, 0, windowWidth);
    constrain(mouseY, 0, windowHeight);
    var xc = map(mouseX, 0, windowWidth / 2, 600, windowWidth / 2);
    var yc = map(mouseY, 0, windowHeight / 2, 300, windowHeight / 2);
    push()
    rectMode(CENTER);
    strokeWeight(1);
    stroke(36, 123, 160);
    fill(0);
    rect(0, 0, x, y);
    pop();
    xReduction += 22;
    yReduction += 9;
    translate(xc - windowWidth / 2, yc - windowHeight / 2, 0);
  }
}
