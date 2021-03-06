var balls = [];
var numBalls = 10;
var leftPadScore = 0;
var rightPadScore = 0;
var mouse = 0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < numBalls; i++) {
    balls.push(new Ball(width / 2, height / 2, random(-5, 5), random(-2, 2), 10, 5));
  }
  rightPaddle = new Paddle(width - 10, height / 2, 15, 100, 10, DOWN_ARROW, UP_ARROW);
  leftPaddle = new Paddle(0, height / 2, 15, 100, 10, 83, 87);
  score = new Score(40);
  bigBall = new BigBall(width / 2, height / 2, 5, random(5, 5), 100);
  endScreen = new EndScreen();
  enemyBall = new EnemyBall(width / 2, height / 2, 5, random(3, 3), 100);

  ///START SCREEN///
  push();
  rectMode(CENTER);
  fill(20);
  rect(windowWidth / 2, windowHeight / 2, windowWidth / 3 + 50, windowHeight / 3 + 50);
  fill(4, 231, 98);
  rect(windowWidth / 2, windowHeight / 2, windowWidth / 3, windowHeight / 3);
  textSize(40);
  textStyle(ITALIC, BOLD);
  textAlign(CENTER, CENTER);
  fill(0);
  textFont('futura');
  text("stress pong", windowWidth / 2, (windowHeight / 2) - 35);
  textStyle(BOLD);
  text("click to start", windowWidth / 2, (windowHeight / 2) + 25);
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
    enemyBall.update();
    enemyBall.handleCollision(leftPaddle);
    enemyBall.handleCollision(rightPaddle);
    if (bigBall.isOffScreen()) {
      bigBall.reset();
    }
    if (enemyBall.isOffScreen()) {
      enemyBall.reset();
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
    enemyBall.display();
    /////END SCREEN/////
    if (leftPadScore >= 50 || rightPadScore >= 50) {
      endScreen.update();
      endScreen.display();
    }
  }
}

function mousePressed() {
  mouse = mouse + 1;
}
