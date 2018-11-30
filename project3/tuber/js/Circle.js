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
  constrain(vol, 0, 1);
  var w = map(vol, 0, 1, 0, 60);
  constrain(w, 0, 60);

//update X position with scaled mic input
  this.x += vx + w;
  this.y += vy;

//screen wrapping
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
  fill(251, 251, 251, 1);
  ellipseMode(CENTER);
  translate(this.x, this.y);
  rotate(radians(frameCount));
  stroke(239, 71, 111);
  ellipse(25, 0, this.size, this.size);
  stroke(17, 138, 178);
  ellipse(-25, 0, this.size, this.size);
  stroke(255, 209, 102);
  ellipse(0, 25, this.size, this.size);
  stroke(6, 214, 160);
  ellipse(0, -25, this.size, this.size);
  pop();
  translate(0, 0);
}
