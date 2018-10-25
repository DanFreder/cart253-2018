// How we keep track of the Score

var leftPadScore = 0;
var rightPadScore = 0;

function Score(size) {
this.size = size;
}


// Draw the Score onscreen
Score.prototype.display = function() {
push();
strokeWeight(10);
fill(255);
textSize(this.size);
textStyle(ITALIC, BOLD);
textAlign(this.x,this.y);
text("Right Paddle: " + rightPadScore, width - 120, 450);
text("Left Paddle: " + leftPadScore, width - 600, 450);
pop();
}
