/******************************************************

Game - Chaser
Pippin Barr - modified by Dan Freder

A simple game of cat and mouse.

Physics-based movement, keyboard controls, health/stamina,
sprinting, random movement, screen wrap.

******************************************************/

// Track whether the game is over
var gameOver = false;

// Player position, size, velocity
var playerX;
var playerY;
var playerRadius = 30;
var playerVX = 0;
var playerVY = 0;
var playerMaxSpeed = 2;
// Player health
var playerHealth;
var playerMaxHealth = 255;
// Player fill color
var playerFill = 50;
var spinVal = 1;

// Prey position, size, velocity
var preyX;
var preyY;
var preyRadius = 25;
var preyVX;
var preyVY;
var preyMaxSpeed = 4;
// Prey health
var preyHealth;
var preyMaxHealth = 100;
// Prey fill color
var preyFill = (255);

//prey tx for noise function
var tx = 10;
var ty = 10;

// Amount of health obtained per frame of "eating" the prey
var eatHealth = 10;
// Number of prey eaten during the game
var preyEaten = 0;

//Variables for soundfiles
var eatSong;
var gameOverSong;
eatSong = new Audio("assets/sounds/treasure.mp3");
gameOverSong = new Audio("assets/sounds/gameOver.mp3");

// setup()
//
// Sets up the basic elements of the game
function setup() {
  createCanvas(500,500);
  noStroke();
  setupPrey();
  setupPlayer();
}

// setupPrey()
//
// Initialises prey's position, velocity, and health
function setupPrey() {
  preyX = width/5;
  preyY = height/2;
  preyVX = -preyMaxSpeed;
  preyVY = preyMaxSpeed;
  preyHealth = preyMaxHealth;

}

// setupPlayer()
//
// Initialises player position and health
function setupPlayer() {
  playerX = (4*width/5);
  playerY = (height/2);
  playerHealth = playerMaxHealth;
}

// draw()
//
// While the game is active, checks input
// updates positions of prey and player,
// checks health (dying), checks eating (overlaps)
// displays the two agents.
// When the game is over, shows the game over screen.
function draw() {
  background(100,100,200);

  if (!gameOver) {
    handleInput();

    movePlayer();
    movePrey();

    updateHealth();
    checkEating();

    drawPrey();
    drawPlayer();
  }
  else {
    showGameOver();
  }
}

// handleInput()
//
// Checks arrow keys and adjusts player velocity accordingly
function handleInput() {
  playerMaxSpeed = constrain(playerMaxSpeed,5,12);
// variable to slow player as he gets fat
  preyEaten2 = constrain(preyEaten,0,10);
  playerHealth = constrain(playerHealth,0,255);
  //SHIFT key Speed burst
  if(keyIsDown(SHIFT)) {
    playerMaxSpeed = 13-preyEaten2;
    playerHealth -= 1;
  }
    else {
      playerMaxSpeed = 12-preyEaten2;
  }
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    playerVX = -playerMaxSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    playerVX = playerMaxSpeed;
  }
  else {
    playerVX = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    playerVY = -playerMaxSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    playerVY = playerMaxSpeed;
  }
  else {
    playerVY = 0;
  }
}

// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {
  // Update position
  playerX += playerVX;
  playerY += playerVY;

  // Wrap when player goes off the canvas
  if (playerX < 0) {
    playerX += width;
  }
  else if (playerX > width) {
    playerX -= width;
  }

  if (playerY < 0) {
    playerY += height;
  }
  else if (playerY > height) {
    playerY -= height;
  }
}

// updateHealth()
//
// Reduce the player's health (every frame)
// Check if the player is dead
function updateHealth() {
  // Reduce player health, constrain to reasonable range
  playerHealth = constrain(playerHealth - 0.5,0,playerMaxHealth);
  // Check if the player is dead
  if (playerHealth === 0) {
    // If so, the game is over
    gameOver = true;
    gameOverSong.play();
  }
}

// checkEating()
//
// Check if the player overlaps the prey and updates health of both
function checkEating() {
  // Get distance of player to prey
  var d = dist(playerX,playerY,preyX,preyY);
  // Check if it's an overlap
  if (d < playerRadius + preyRadius) {
    // Increase the player health
    playerHealth = constrain(playerHealth + eatHealth,0,playerMaxHealth);
    // Reduce the prey health
    preyHealth = constrain(preyHealth - eatHealth,0,preyMaxHealth);
//play eating soundfile
eatSong.play();

    // Check if the prey died
    if (preyHealth === 0) {
      // Move the "new" prey to a random position
      preyX = random(0,width);
      preyY = random(0,height);
      // Give it full health
      preyHealth = preyMaxHealth;
      // Track how many prey were eaten
      preyEaten++;
      //Increase the player size, make them slower, increase rotation speed
      playerRadius += preyEaten;
      playerRadius = constrain(playerRadius,25,100);
      spinVal += 1;
    }
  }
}

// movePrey()
//
// Moves the prey based on random velocity changes
function movePrey() {
  preyVX = map(noise(tx),0,1,-preyMaxSpeed,preyMaxSpeed);
  preyVY = map(noise(ty),0,1,-preyMaxSpeed,preyMaxSpeed);
  preyX += preyVX;
  preyY += preyVY;
  tx += 0.1;
  ty += 0.01;

  // Screen wrapping
  if (preyX < 0) {
    preyX += width;
  }
  else if (preyX > width) {
    preyX -= width;
  }
  if (preyY < 0) {
    preyY += height;
  }
  else if (preyY > height) {
    preyY -= height;
  }
}
// drawPrey()
//
// Draw the prey as an ellipse with alpha based on health
function drawPrey() {
  preyRadius = random(15,30);
  fill(preyFill,preyHealth);
  ellipse(preyX,preyY,preyRadius*2);
}

// Draw the player as a rectangle with alpha based on health
function drawPlayer() {

  // rotate around it's center 3 degrees each frame
  push();
  rectMode(CENTER);
  translate(playerX,playerY);
  rotate(radians(frameCount*spinVal));
  fill(playerFill,playerHealth);
  rect(0,0,playerRadius,playerRadius,5,5,5,5);
  pop();
}

// showGameOver()
//
// Display text about the game being over!
function showGameOver() {
  textSize(32);
  textAlign(CENTER,CENTER);
  fill(0);

if (preyEaten > 0) {
var gameOverText = "GAME OVER\n";
fill(random(255))
gameOverText += "You ate " + preyEaten + " innocent circles,\n";
gameOverText += "you monster.\n";
text(gameOverText,width/2,height/2);
}
else {
var gameOverText = "WINNER\n";
fill(255,255,0);
gameOverText += "You ate " + preyEaten + " innocent circles,\n";
gameOverText += "you considerate soul.\n";
text(gameOverText,width/2,height/2);
}
}
