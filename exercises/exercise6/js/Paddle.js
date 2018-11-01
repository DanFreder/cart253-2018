// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

//Paddle constructor

//Sets the properties with the provided arguments or defaults

function Paddle(x, y, w, h, speed, downKey, upKey) {
  this.x = x;
  this.y = y;

  /////FIXED .VX in stead of .XV
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  /////FIXED
  this.speed = 5;
  this.downKey = downKey;
  this.upKey = upKey;
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately

/////FIXED - corrected syntax and reversed downkey direction
Paddle.prototype.handleInput = function() {
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  } else if (keyIsDown(this.downKey)) {
    this.vy = this.speed;
  } else {
    this.vy = 0;
/////FIXED - prevents runaway paddles/stops paddles when keys aren't pressed)
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;
  /////FIXED the funtion is called "constrain", and is similar to map (not "constrained")
  this.y = constrain(this.y, 0, height - this.h);
}

// display()
//
// Draw the paddle as a rectangle on the screen
Paddle.prototype.display = function() {
  fill(255);
  rect(this.x, this.y, this.w, this.h);
  /////FIXED - the name of the function to draw a rectangle is "rect"
}
