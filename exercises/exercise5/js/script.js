// Basic OO Pong
// by Pippin Barr modified by Dan Freder for Ex 5
//
// A primitive implementation of Pong playable with the keyboard.
// Arrow keys = right paddle
// W and S = left paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball, paddles & score
var ball;
var leftPaddle;
var rightPaddle;
var score;

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(640,480);
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,12,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW,251);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87,251);
  score = new Score(15);
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  if (ball.isOffScreen()) {
    ball.reset();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);
  score.display();
  ball.display();
  leftPaddle.display();
  rightPaddle.display();
}
