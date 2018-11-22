function Polysphere(x, y, size, speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
  this.poly = 4;
}

Polysphere.prototype.display = function() {
  //style for our spheres
  push();
  strokeWeight(2);
  stroke(226);
  fill(0, 0, 0, 0);

// rotating spheres
  translate(this.x, this.y, 0);
  rotateX(o1x);
  rotateY(o1y);
  rotateZ(o1z);
  sphere(this.size,this.poly,this.poly);

// another sphere that rotates opposite the 1st
  rotateX(2*o1x);
  rotateY(2*o1y);
  rotateZ(2*o1z);
  sphere(this.size,this.poly,this.poly);

  o1x += .001;
  o1y += .001;
  o1z += .00;

}
