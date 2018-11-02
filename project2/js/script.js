var balls = [];
var numBalls = 1000;
var leftPadScore = 0;
var rightPadScore = 0;
var mouseState = 0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < numBalls; i++) {
    balls.push(new Ball(width / 2, height / 2, (random(-5, 5) + 1), (random(-2, 2) + 1), 10, 5));
  }
  rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW);
  leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87);
  score = new Score(40);
  bigBall = new BigBall(width / 2, height / 2, 5, random(5, 5), 100);
}

function mousePressed() {
  mouseState += 1;
}

function draw() {
  background(0);

  ///START SCREEN///
  cnv.mousePressed(mouseState)
  if (mouseState === 0) {
    push();
    rectMode(CENTER);
    fill(20);
    rect(windowWidth / 2, windowHeight / 2, windowWidth - 300, windowHeight - 300);
    fill(4,231,98);
    rect(windowWidth / 2, windowHeight / 2, windowWidth - 500, windowHeight - 500);
    textSize(100);
    textStyle(ITALIC, BOLD);
    textAlign(CENTER, CENTER);
    fill(0);
    textFont('futura');
    text("click to start", windowWidth / 2, (windowHeight / 2)-20);
    pop();
  } else {

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
  }
}
