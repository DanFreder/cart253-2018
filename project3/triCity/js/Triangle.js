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

  //keyboard arrow keys control vertices
  if (keyIsDown(LEFT_ARROW)) {
    aX -= 0.1;
    bX -= 0.1;
    cX -= 0.1;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    aX += 0.1;
    bX += 0.1;
    cX += 0.1;
  }
  if (keyIsDown(UP_ARROW)) {
    aY -= 0.1;
    bY -= 0.1;
    cY -= 0.1;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    aY += 0.1;
    bY += 0.1;
    cY += 0.1;
  }
}

Triangle.prototype.display = function() {

  push();
  fill(245, 237, 240, 3);
  stroke(66,76,85,255);
  strokeWeight(2);
  translate(oX,oY);
  rotate(radians(frameCount) * this.direction);
  triangle(this.offsetX + aX,this.offsetY + aY,
          this.offsetX + bX, this.offsetY + bY,
          this.offsetX + cX, this.offsetY+ cY);
  pop();
  }
