function PolySphere(x, y, size, speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
}

PolySphere.prototype.update = function() {
  // move the Spheres
// this.x += this.vx;
  // this.y += this.vy;
  // this.z += this.vz;
}

PolySphere.prototype.display = function() {
  /// LOW POLY SPHERES
  push();
  strokeWeight(1);
  stroke(226);
  fill(0, 0, 0, 0);

  translate(this.x, this.y, 150);
  rotateX(o1x);
  rotateY(o1y);
  rotateZ(o1z);
  sphere(this.size, 4, 4);

  translate(10, 10, 10);
  rotateX(o1y);
  rotateY(o1z);
  rotateZ(o1x);
  sphere(this.size, 4, 4);

  translate(10, 10, 10);
  rotateX(o1z);
  rotateY(o1x);
  rotateZ(o1y);
  sphere(this.size, 4, 4);

  translate(10, 10, 10);
  rotateX(o1x);
  rotateY(o1x);
  rotateZ(o1x);
  sphere(this.size, 4, 4);

  translate(10, 10, 10);
  rotateX(o1y);
  rotateY(o1y);
  rotateZ(o1y);
  sphere(this.size, 4, 4);

  pop();

  o1x += .0009;
  o1y += .0008;
  o1z += .001;

}

PolySphere.prototype.reset = function() {
  //reset the polySphere?
  this.x = windowWidth / 2;
  this.y = windowHeight / 2;
}
