function Circle(x, y, size) {
  this.size = size;
  this.x = x;
  this.y = y;

  tx = random(0, 1000);
  ty = random(0, 1000);

}

Circle.prototype.update = function() {
  vx = map(noise(tx), 0, 1, -maxSpeed, maxSpeed);
  vy = map(noise(ty), 0, 1, -maxSpeed, maxSpeed);

  this.x += vx;
  this.y += vy;

  if (this.x < 0) {
    this.x += windowWidth;
  } else if (this.x > windowWidth) {
    this.x -= windowWidth;
  }

  if (this.y < 0) {
    this.y += windowHeight;
  } else if (this.y > windowHeight) {
    this.y -= windowHeight;
  }

  tx += 0.01;
  ty += 0.01;
}

Circle.prototype.display = function() {
  push();
  ellipseMode(CENTER);
  fill(255, 255, 255, 5);
  translate(this.x, this.y);
  rotate(radians(frameCount * 2));
  ellipse(25, 0, this.size, this.size);
  ellipse(-25, 0, this.size, this.size);
  ellipse(0, 25, this.size, this.size);
  ellipse(0, -25, this.size, this.size);
  pop();
  translate(0, 0);
}

Circle.prototype.reset = function() {}
