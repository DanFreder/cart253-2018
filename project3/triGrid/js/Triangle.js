function Triangle(offsetX,offsetY,direction) {
  this.offsetX = offsetX;
  this.offsetY = offsetY;
  this.direction = direction;
  // -1 or 1 for direction
}

Triangle.prototype.update = function() {
  //find center of each triangle
  oX = ((aX + bX + cX) / 3);
  oY = ((aY + bY + cY) / 3);
}

Triangle.prototype.display = function() {
  push();
  noFill();
  stroke(0);
  strokeWeight(1);
  translate(oX,oY);
  rotate(radians(frameCount) * this.direction);
  triangle(aX + this.offsetX,aY + this.offsetY,
    bX + this.offsetX,bY + this.offsetY,
    cX + this.offsetX,cY + this.offsetY);
    translate(windowWidth/2,windowHeight/2);
  pop();
}
