function BlueRectangles(x, y, numRects) {
  this.x = x;
  this.y = y;
  this.crazy = numRects;
}


BlueRectangles.prototype.update = function() {
  //move the Rectangles
//  this.x += this.vx;
  //this.y += this.vy;
  //this.z += this.vz;
}

BlueRectangles.prototype.display = function() {
  //Stylish rectangles
  if (mouseIsPressed) {
    edge = 0;
    ///stylish rectangles
    for (var i = 0; i < this.crazy; i++) {
      var xSize = random(100, 200);
      var ySize = random(75, 175);
      push()
      rectMode(CENTER);
      strokeWeight(2);
      stroke(36, 123, 160);
      fill(0);
      rect(this.x, this.y, windowWidth - xSize, windowHeight - ySize);
      pop();
    }
  } else {
    edge = 0;
  }
}

BlueRectangles.prototype.reset = function() {
  //reset the Rectangles?
  this.x = windowWidth/ 2;
  this.y = windowHeight / 2;
}
