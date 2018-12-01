function Triangle() {}

Triangle.prototype.update = function() {}

Triangle.prototype.display = function() {

  push();
  translate(windowWidth / 2, windowHeight / 2);
  fill(0, 0, 255, 3);
  stroke(255, 0, 0);
  strokeWeight(1);
  oX = ((aX + bX + cX) / 3);
  oY = ((aY + bY + cY) / 3);
  oX = constrain(oX, 0, windowWidth);
  oY = constrain(oY, 0, windowHeight);
  translate(oX, oY);
  rotate(radians(frameCount));
  triangle(aX, aY, bX, bY, cX, cY);
  pop();

  if (aX < -800) {
    bY--;
  }
  if (frameCount > 850) {
    aX--;
    cX++;
    oX *= -1;
    oY *= -1;
  } else {
    aX++;
    cX--;
  }
  if (frameCount > 1200) {
    aX--;
    cX++;
    oX *= -1;
    oY *= -1;
  } else if (frameCount > 1800) {
    aX++;
    cX--;
    oX *= -1;
    oY *= -1;
    bY++;
  }
}
