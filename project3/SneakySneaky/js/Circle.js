function Circle(x,y,size) {
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
  fill(255, 255, 255, 8);
  ellipse(this.x+25, this.y, this.size, this.size);
  ellipse(this.x-25, this.y, this.size, this.size);
  ellipse(this.x, this.y+25, this.size, this.size);
  ellipse(this.x, this.y-25, this.size, this.size);
  pop();
}

Circle.prototype.reset = function() {
}
