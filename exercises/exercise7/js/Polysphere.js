function PolySphere(x, y, size, speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
}

PolySphere.prototype.update = function() {
  //move the Sphere?
//  this.x += this.vx;
  //this.y += this.vy;
  //this.z += this.vz;
}

PolySphere.prototype.display = function() {
  //display the cube
  /// LOW POLY SPHERE
    push();
    translate(this.x, this.y, 100);
    strokeWeight(1);
    stroke(226);
    rotateX(o1x+this.speed);
    rotateY(o1y+this.speed);
    rotateZ(o1z+this.speed);
    fill(0,0,0,0);
    sphere(this.size, 4, 4);
    pop();
  o1x += .001;
  o1y += .002;
  o1z += .003;
  pop();
}

PolySphere.prototype.reset = function() {
  //reset the polySphere?
  this.x = windowWidth/ 2;
  this.y = windowHeight / 2;
}
