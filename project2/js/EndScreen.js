/////NEW/////

function EndScreen() {
  this.winner = undefined;
}

EndScreen.prototype.update = function() {
  if (leftPadScore >= 50) {
    this.winner = "left";
  } else if (rightPadScore >= 50) {
    this.winner = "right";
  }
}

EndScreen.prototype.display = function() {
  push();
  rectMode(CENTER);
  fill(4, 231, 98);
  rect(windowWidth / 2, windowHeight / 2, windowWidth / 3, windowHeight / 3);
  textSize(40);
  textStyle(ITALIC, BOLD);
  textAlign(CENTER, CENTER);
  fill(0);
  textFont('futura');
  text(this.winner + " wins!", (windowWidth / 2), (windowHeight / 2) - 30);
  textStyle(BOLD);
  text("ctrl R to restart", (windowWidth / 2), (windowHeight / 2) + 25);
  pop();
  noLoop();
}
/////END NEW/////
