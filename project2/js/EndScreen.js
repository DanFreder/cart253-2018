/////NEW/////

function EndScreen() {
}

EndScreen.prototype.display = function() {
  push();
  rectMode(CENTER);
  fill(20);
  rect(windowWidth / 2, windowHeight / 2, windowWidth/4+100, windowHeight/4+100);
  fill(4,231,98);
  rect(windowWidth / 2, windowHeight / 2, windowWidth/4, windowHeight/4);
  textSize(40);
  textStyle(ITALIC, BOLD);
  textAlign(CENTER, CENTER);
  fill(0);
  textFont('futura');
  text("left paddle wins!", windowWidth / 2, (windowHeight / 2)-30);
  textStyle(BOLD);
  text("click to restart", windowWidth / 2, (windowHeight / 2)+25);
  pop();

if (mousePressed()) {
  reset();
}
}
/////END NEW/////
