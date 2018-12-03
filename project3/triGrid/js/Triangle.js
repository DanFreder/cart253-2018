function Triangle(xLocation,yLocation,spin) {
  this.offsetX = offsetX;
  this.offsetY = offsetY;
  this.spin = spin;

}

Triangle.prototype.update = function() {
  //find center of each triangle
  oX = ((aX + bX + cX + this.offsetX) / 3);
  oY = ((aY + bY + cY + this.offsetY) / 3);
}

Triangle.prototype.display = function() {
  push();
  fill(112,193,179,50);
  stroke(255,35,94,255);
  strokeWeight(3);
  translate(oX,oY);
  rotate(radians(frameCount/10) + this.spin);
  triangle(aX,aY,
    bX,bY,
    cX,cY);
  //translate(windowWidth/2,windowHeight/2);
  pop();
}
