/////NEW/////

// How we keep track of the Score + draw it onscreen

var leftPadScore = 0;
var rightPadScore = 0;

function Score(size) {
  this.size = size;
}

Score.prototype.display = function() {
  if (leftPadScore === rightPadScore) {
    push();
    fill(76, 159, 112);
    strokeWeight(10);
    textSize(this.size);
    textStyle(ITALIC, BOLD);
    textAlign(this.x, this.y);
    text("Left Paddle: " + leftPadScore, width - 600, 450);
    text("Right Paddle: " + rightPadScore, width - 140, 450);
    pop();
  }
  if (leftPadScore > rightPadScore) {
    push();
    fill(251, 54, 64);
    strokeWeight(10);
    textSize(this.size);
    textStyle(ITALIC, BOLD);
    textAlign(this.x, this.y);
    text("Right Paddle: " + rightPadScore, width - 140, 450);
    pop();
    push();
    fill(76, 159, 112);
    strokeWeight(10);
    textSize(this.size);
    textStyle(ITALIC, BOLD);
    textAlign(this.x, this.y);
    text("Left Paddle: " + leftPadScore, width - 600, 450);
    pop();
  }
  if (rightPadScore > leftPadScore) {
    push();
    fill(76, 159, 112);
    strokeWeight(10);
    textSize(this.size);
    textStyle(ITALIC, BOLD);
    textAlign(this.x, this.y);
    text("Right Paddle: " + rightPadScore, width - 140, 450);
    pop();
    push();
    fill(251, 54, 64);
    strokeWeight(10);
    textSize(this.size);
    textStyle(ITALIC, BOLD);
    textAlign(this.x, this.y);
    text("Left Paddle: " + leftPadScore, width - 600, 450);
    pop();
  }
}
/////END NEW/////
