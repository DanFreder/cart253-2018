function Circle(x,y,size) {
  this.size = size;
  this.x = x;
  this.y = y;

  tx = random(0, 1000);
  ty = random(0, 1000);

  x = windowWidth / 2;
  y = windowHeight / 2;
}

Circle.prototype.update = function() {
  vx = map(noise(tx), 0, 1, -maxSpeed, maxSpeed);
  vy = map(noise(ty), 0, 1, -maxSpeed, maxSpeed);

  this.x += vx;
  this.y += vy;

  if (this.x < 0) {
    this.x += windowWidth;
  } else if (x > windowWidth) {
    this.x -= windowWidth;
  }

  if (this.y < 0) {
    this.y += windowHeight;
  } else if (y > windowHeight) {
    this.y -= windowHeight;
  }

  tx += 0.01;
  ty += 0.01;
}

Circle.prototype.display = function() {
  fill(255, 255, 255, 8);
  ellipse(this.x, this.y, this.size, this.size);
}

Circle.prototype.reset = function() {
}
