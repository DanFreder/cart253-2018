function Ball(x, y, vx, vy, size, speed) {
  this.size = size;
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
}

Ball.prototype.update = function() {
  //move the ball here
  this.x += this.vx;
  this.y += this.vy;
}

Ball.prototype.display = function() {
  //display the ball here
  rectMode(CENTER);
  rect(this.x, this.y, this.size, this.size);
  fill(255);
  //bounce if the ball hits the floor/ceiling
  if (this.y < 0 || this.y > height) {
    this.vy = -this.vy;
  }
  if (this.x > width) {
    this.reset();
  }
  if (this.x < 0) {
    this.reset();
  }
}

Ball.prototype.reset = function() {
  //reset the ball here
  this.x = width / 2;
  this.y = height / 2;
}
