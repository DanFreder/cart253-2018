function Cube(x, y, vx, vy, vz, size, speed) {
  this.size = size;
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.vz = vz;
  this.red = 10;
  this.green = 36;
  this.blue = 99;
}


Cube.prototype.update = function() {
  //move the cube
  this.x += this.vx;
  this.y += this.vy;
  this.z += this.vz;
}

Cube.prototype.display = function() {
  //display the cube
  push();
  translate(0, 0, 0);
  strokeWeight(1);
  stroke(0);
  rotateX(o1x);
  rotateY(o1y);
  rotateZ(o1z);
  fill(this.red, this.green, this.blue);
  box(this.size,this.size,this.size);
  o1x += .001;
  o1y += .002;
  o1z += .003;
  pop();

  //bounce if the Cube hits the floor/ceiling
  if (this.y < 0 || this.y > windowHeight) {
    this.vy = -this.vy;
  }
  if (this.x > windowWidth) {
    this.reset();
  }
  if (this.x < 0) {
    this.reset();
  }
}

Cube.prototype.reset = function() {
  //reset the ball here
  this.x = windowWidth/ 2;
  this.y = windowHeight / 2;
}
