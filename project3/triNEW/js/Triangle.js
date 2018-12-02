function Triangle(offsetX,offsetY,direction) {
  this.offsetX = offsetX;
  this.offsetY = offsetY;
  this.direction = direction;

  // -1 or 1 for direction
}

Triangle.prototype.update = function() {
  oX = ((aX + bX + cX) / 3);
  oY = ((aY + bY + cY) / 3);

  //find center of each triangle
}

Triangle.prototype.display = function() {

  push();
  fill(255, 255, 255, 2);
  stroke(0,0,0,150);
  strokeWeight(2);
  translate(oX,oY);
  rotate(radians(frameCount) * this.direction);
  triangle(this.offsetX + aX,this.offsetY + aY,
          this.offsetX + bX, this.offsetY + bY,
          this.offsetX + cX, this.offsetY+ cY);
  pop();

  }
