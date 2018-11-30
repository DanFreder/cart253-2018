function Cubes(x, y, size) {
  this.size = size;
  this.x = x;
  this.y = y;
}

Cubes.prototype.display = function() {

  o1x += .001;
  o1y += .002;
  o1z += .003;

strokeWeight(0);
  ///BLUE CUBE
  push();
  translate(this.x-10,this.y-5, -3);
  stroke(0);
  rotateX(o1x);
  rotateY(o1y);
  rotateZ(o1z);
  fill(10, 36, 99);
  box(this.size,this.size,this.size,4,4);
  pop();

  ///GREY CUBE
  push();
  translate(this.x, this.y, 0);
  stroke(0);
  rotateX(o1z);
  rotateY(o1x);
  rotateZ(o1y);
  fill(96, 95, 94);
  box(this.size,this.size,this.size,4,4);
  pop();

  ///RED CUBE
  push();
  translate(this.x+10, this.y+5, 3);
  stroke(0);
  rotateX(frameCount / 1000);
  rotateY(frameCount / 1000);
  rotateZ(frameCount / 1000);
  fill(251, 54, 64);
  box(this.size,this.size,this.size,4,4);
  pop();
}
