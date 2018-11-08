/////NEW/////

function EndScreen() {
  this.winner = undefined;
}

EndScreen.prototype.update = function() {
  if (leftPadScore >= 20) {
    this.winner = "Left";
  } else if (rightPadScore >= 20) {
    this.winner = "Right";
  }
}

EndScreen.prototype.display = function() {
  push();
  rectMode(CENTER);
  fill(20);
  rect(windowWidth / 2, windowHeight / 2, windowWidth / 4 + 100, windowHeight / 4 + 100);
  fill(4, 231, 98);
  rect(windowWidth / 2, windowHeight / 2, windowWidth / 4, windowHeight / 4);
  textSize(40);
  textStyle(ITALIC, BOLD);
  textAlign(CENTER, CENTER);
  fill(0);
  textFont('futura');
  text(this.winner + " wins!", (windowWidth / 2), (windowHeight / 2) - 30);
  textStyle(BOLD);
  text("ctrl + R to restart", (windowWidth / 2), (windowHeight / 2) + 25);
  pop();
  noLoop();
}
/////END NEW/////
