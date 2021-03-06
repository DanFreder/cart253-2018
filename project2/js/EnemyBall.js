// Ball
//
// A class to define how a ball behaves. Including bouncing on the top
// and bottom edges of the canvas, going off the left and right sides,
// and bouncing off paddles.

// Ball constructor
//
// Sets the properties with the provided arguments
function EnemyBall(x, y, vx, vy, size, speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = 20;
  this.speed = speed;
}

// update()
//
// Moves according to velocity, constrains y to be on screen,
// checks for bouncing on upper or lower edgs, checks for going
// off left or right side.
EnemyBall.prototype.update = function() {
  // Update position with velocity
  this.x += this.vx;
  this.y += this.vy;

  // Constrain y position to be on screen
  this.y = constrain(this.y, 0, height - this.size);

  // Check for touching upper or lower edge and reverse velocity if so
  if (this.y === 0 || this.y + this.size === height) {
    this.vy = -this.vy;
  }
}

// isOffScreen()
//
// Checks if the ball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
EnemyBall.prototype.isOffScreen = function() {
  // Check for going off screen and reset if so
  if (this.x + this.size < 0) {
    this.vx = -this.vx;
    return true;
  }
  if (this.x > width) {
    this.vx = -this.vx;
    return true;
  } else {
    return false;
  }
}

// display()
//
// Draw the enemy as a red rectangle on the screen
EnemyBall.prototype.display = function() {
  fill(255, 0, 0);
  rectMode(CENTER);
  rect(this.x, this.y, this.size, this.size, 3);
  push();
  fill(0);
  textSize(20);
  textStyle(BOLD);
  textFont('Helvetica');
  textAlign(CENTER, CENTER);
  text("X", this.x, this.y + 2);
  pop();
}

// Check if enemy overlaps the paddle, reverse x velocity + shorten paddle
EnemyBall.prototype.handleCollision = function(paddle) {
  // Check if the ball overlaps the paddle on x axis
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      // If so, move ball back to previous position (by subtracting current velocity)
      ///AND MAKE THE PADDLE SMALLER
      this.x -= this.vx;
      this.y -= this.vy;
      paddle.h -= 5;
      paddle.w += 4;
      // Reverse x velocity to bounce
      this.vx = -this.vx;
    }
  }
}

// reset()
//
// Set position back to the middle of the screen
EnemyBall.prototype.reset = function() {
  this.x = width / 2;
  this.y = height / 2;
}
