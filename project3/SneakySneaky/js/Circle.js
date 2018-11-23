function Circle(x, y, size) {
  this.size = size;
  this.x = x;
  this.y = y;

  tx = random(1);
  ty = random(1);
}

Circle.prototype.update = function() {
  vx = map(noise(tx), 0, 1, -maxSpeed, maxSpeed);
  vy = map(noise(ty), 0, 1, -maxSpeed, maxSpeed);
  // volume (0. - 1.)
  var vol = mic.getLevel();
  var w = map(vol, 0, 1, 0, windowWidth / 4);

  this.x += vx + w;
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
  fill(251,251,251,1);
  ellipseMode(CENTER);
  translate(this.x, this.y);
  rotate(radians(frameCount));
  stroke(46,134,171);
  ellipse(25, 0, this.size, this.size);
    stroke(162,59,114);
  ellipse(-25, 0, this.size, this.size);
  stroke(241,143,1);
  ellipse(0, 25, this.size, this.size);
  stroke(199,62,29);
  ellipse(0, -25, this.size, this.size);
  pop();
  translate(0, 0);
}

Circle.prototype.reset = function() {
}
