function Polysphere(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.poly = 4;
}

Polysphere.prototype.display = function() {
  //style for our spheres
  push();
  strokeWeight(2);
  stroke(226);
  fill(0, 0, 0, 0);

// rotating sphere
  translate(this.x, this.y, 100);
  rotateX(o1x);
  rotateY(o1y);
  rotateZ(o1z);
  sphere(this.size,this.poly,this.poly);

// another sphere that rotates opposite the 1st
  rotateX(-o1x);
  rotateY(o1y);
  rotateZ(o1z);
  sphere(this.size,this.poly,this.poly);

  o1x += .001;
  o1y += .002;
  o1z += .003;
}
  Polysphere.prototype.reset = function() {
}
