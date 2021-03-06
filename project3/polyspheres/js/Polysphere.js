function Polysphere(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.poly = 4;
}

Polysphere.prototype.display = function() {
  //style for our spheres
  push();
  strokeWeight(1);
  stroke(226);
  fill(0, 0, 0, 0);

// rotating sphere
  translate(this.x, this.y, 100);
  rotateX(o1x);
  rotateY(o1y);
  rotateZ(o1z);
  sphere(this.size,this.poly,this.poly);

// another 2 spheres that rotate partially opposite the 1st
  rotateX(-o1x);
  rotateY(o1y);
  rotateZ(o1z);
  sphere(this.size,this.poly,this.poly);

  rotateX(o1x);
  rotateY(-o1y);
  rotateZ(o1z);
  sphere(this.size,this.poly,this.poly);
  pop();

  o1x += .001;
  o1y += .002;
  o1z += .003;
}
