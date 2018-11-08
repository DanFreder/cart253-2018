var balls = [];
var numBalls = 50;
var leftPadScore = 0;
var rightPadScore = 0;
var mouse = 0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < numBalls; i++) {
    balls.push(new Ball(width / 2, height / 2, random(-5, 5), random(-2, 2), 10, 5));
  }
  rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW);
  leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87);
  score = new Score(40);
  bigBall = new BigBall(width / 2, height / 2, 5, random(5, 5), 100);
  endScreen = new EndScreen();

///START SCREEN///
    push();
    rectMode(CENTER);
    fill(20);
    rect(windowWidth / 2, windowHeight / 2, windowWidth/4+50, windowHeight/4+50);
    fill(4,231,98);
    rect(windowWidth / 2, windowHeight / 2, windowWidth/4, windowHeight/4);
    textSize(40);
    textStyle(ITALIC, BOLD);
    textAlign(CENTER, CENTER);
    fill(0);
    textFont('futura');
    text("\"party pong\"", windowWidth / 2, (windowHeight / 2)-30);
    textStyle(BOLD);
    text("click to start", windowWidth / 2, (windowHeight / 2)+25);
    pop();
}

function draw() {
  if (mouse >= 1) {
  background(0);

    /// START GAME ///
    leftPaddle.handleInput();
    rightPaddle.handleInput();

    leftPaddle.update();
    rightPaddle.update();
    bigBall.update();
    if (bigBall.isOffScreen()) {
      bigBall.reset();
    }

    for (var i = 0; i < balls.length; i++) {
      balls[i].update();
      if (balls[i].isOffScreen()) {
        balls[i].reset();
      }
      balls[i].handleCollision(leftPaddle);
      balls[i].handleCollision(rightPaddle);
      balls[i].display();
      bigBall.handleCollision(leftPaddle);
      bigBall.handleCollision(rightPaddle);
    }
    noStroke();
    leftPaddle.display();
    rightPaddle.display();
    score.display();
    bigBall.display();
/////END SCREEN/////
      if (leftPadScore >= 150) {
      endScreen.display();
    } else {
    }
  }
}
function mousePressed() {
  mouse = mouse + 1;
}
