/////NEW/////

// How we keep track of the Score + draw it onscreen


function Score(size) {
  this.size = size;
}

Score.prototype.display = function() {
  if (leftPadScore === rightPadScore) {
    push();
    fill(100);
    strokeWeight(10);
    textSize(this.size);
    textStyle(ITALIC, BOLD);
    textAlign(CENTER, CENTER);
    text(leftPadScore, 100, windowHeight - 100);
    text(rightPadScore, windowWidth - 150, windowHeight - 100);
    pop();
  }
  if (leftPadScore > rightPadScore) {
    push();
    fill(251, 54, 64);
    strokeWeight(10);
    textSize(this.size);
    textStyle(ITALIC, BOLD);
    textAlign(CENTER, CENTER);
    text(rightPadScore, windowWidth - 150, windowHeight - 100);
    pop();

    push();
    fill(76, 159, 112);
    strokeWeight(10);
    textSize(this.size);
    textStyle(ITALIC, BOLD);
    textAlign(CENTER, CENTER);
    text(leftPadScore, 100, windowHeight - 100);
    pop();
  }

  if (rightPadScore > leftPadScore) {
    push();
    fill(76, 159, 112);
    strokeWeight(10);
    textSize(this.size);
    textStyle(ITALIC, BOLD);
    textAlign(CENTER, CENTER);
    text(rightPadScore, windowWidth - 150, windowHeight - 100);
    pop();

    push();
    fill(251, 54, 64);
    strokeWeight(10);
    textSize(this.size);
    textStyle(ITALIC, BOLD);
    textAlign(CENTER, CENTER);
    text(leftPadScore, 100, windowHeight - 100);
    pop();
  }
}
/////END NEW/////
