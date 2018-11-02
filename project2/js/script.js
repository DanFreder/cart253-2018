var balls = [];
var numBalls = 100;
var leftPadScore = 0;
var rightPadScore = 0;

function setup() {
    createCanvas(windowWidth,windowHeight);
    for (var i = 0; i < numBalls; i++) {
      balls.push(new Ball(width/2,height/2,random(-5,5),random(-2,2),10,5));
    }
    rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW);
    leftPaddle = new Paddle(0,height/2,10,60,10,83,87);
    score = new Score(50);
    bigBall = new BigBall(width/2,height/2,random(-5,5),random(-2,2),10,20);
}

function draw() {
  background(0);

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

  leftPaddle.display();
  rightPaddle.display();
  score.display();
  bigBall.display();
}













// // Basic OO Pong
// // by Pippin Barr
// //
// // A primitive implementation of Pong with no scoring system
// // just the ability to play the game with the keyboard.
// //
// // Arrow keys control the right hand paddle, W and S control
// // the left hand paddle.
// //
// // Written with JavaScript OOP.
//
// // Variable to contain the objects representing our ball and paddles
// var ball;
// var leftPaddle;
// var rightPaddle;
//
// // setup()
// //
// // Creates the ball and paddles
// function setup() {
//   createCanvas(640,480);
//   // Create a ball
//   ball = new Ball(width/2,height/2,5,5,10,5);
//   // Create the right paddle with UP and DOWN as controls
//   rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW);
//   // Create the left paddle with W and S as controls
//   // Keycodes 83 and 87 are W and S respectively
//   leftPaddle = new Paddle(0,height/2,10,60,10,83,87);
// }
//
// // draw()
// //
// // Handles input, updates all the elements, checks for collisions
// // and displays everything.
// function draw() {
//   background(0);
//
//   leftPaddle.handleInput();
//   rightPaddle.handleInput();
//
//   ball.update();
//   leftPaddle.update();
//   rightPaddle.update();
//
//   if (ball.isOffScreen()) {
//     ball.reset();
//   }
//
//   ball.handleCollision(leftPaddle);
//   ball.handleCollision(rightPaddle);
//
//   ball.display();
//   leftPaddle.display();
//   rightPaddle.display();
// }
