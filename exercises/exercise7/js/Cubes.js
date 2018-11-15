function Cubes(x, y, size, speed) {
  this.size = size;
  this.speed = speed;
  this.x = x;
  this.y = y;
}

Cubes.prototype.update = function() {
  //move the cube
}

Cubes.prototype.display = function() {

  ///BLUE CUBE
  o1x += .001;
  o1y += .002;
  o1z += .003;
  push();
  strokeWeight(edge);
  translate(this.x-10,this.y-5, -3);
  stroke(0);
  rotateX(o1x+this.speed);
  rotateY(o1y+this.speed);
  rotateZ(o1z+this.speed);
  fill(10, 36, 99);
box(this.size,this.size,this.size, 0, 0);
  pop();

  ///GREY CUBE
  push();
  translate(this.x, this.y, 0);
  strokeWeight(edge);
  stroke(0);
  rotateX(o1x - this.speed);
  rotateY(o1y - this.speed);
  rotateZ(o1z - this.speed);
  fill(96, 95, 94);
  box(this.size,this.size,this.size, 0, 0);
  pop();

  ///RED CUBE
  push();
  translate(this.x+10, this.y+5, 3);
  strokeWeight(edge);
  stroke(0);
  rotateX(o1x + frameCount / 1000);
  rotateY(o1y + frameCount / 1000);
  rotateZ(o1z + frameCount / 1000);
  fill(251, 54, 64);
box(this.size,this.size,this.size, 0, 0);
  pop();
}

Cubes.prototype.reset = function() {
  //reset the Cubes here
  this.x = windowWidth/ 2;
  this.y = windowHeight / 2;
}
