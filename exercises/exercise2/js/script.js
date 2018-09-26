/*********************************************************

Exercise 2 - The Artful Dodger
Pippin Barr

Starter code for exercise 2.

*********************************************************/

// Dan's Score Text
var scoreText;

//Dan's starImage
var starImage;

// Dan's background Colour
var backColourRed = 218;
var backColourGreen = 44;
var backColourBlue = 56;
var randomRed = 10
var randomGreen = 10
var randomBlue = 10

// The position and size of our avatar circle
var avatarX;
var avatarY;
var avatarSize = 50;

// The speed and velocity of our avatar circle
var avatarSpeed = 10;
var avatarVX = 0;
var avatarVY = 0;

// The position and size of the enemy circle
// Dan added enemy size increase
var enemyX;
var enemyY;
var enemySize = 50;
// How much bigger the enemy circle gets with each successful dodge
var enemySizeIncrease = 5;

// The speed and velocity of our enemy circle
var enemySpeed = 5;
var enemyVX = 5;
// How much bigger the enemy circle gets with each successful dodge
var enemySpeedIncrease = 0.5;

// How many dodges the player has made
var dodges = 0;

function preload() {
  starImage = loadImage("assets/images/starImage.png");
  shfiftyImage = loadImage("assets/images/shfifty.png");
}

// setup()
//
// Make the canvas, position the avatar and anemy
function setup() {
  // Create our playing area
  createCanvas(500,500);

  // Put the avatar in the centre
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas
  enemyX = 0;
  enemyY = random(0,height);

  // No stroke so it looks cleaner
  noStroke();
}

// draw()
//
// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {
  // Initial Background
  background(244, 240, 187);

  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avatarVX = 0;
  avatarVY = 0;

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately

  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
  }

  // Move the avatar according to its calculated velocity
  avatarX = avatarX + avatarVX;
  avatarY = avatarY + avatarVY;

  // The enemy always moves at enemySpeed (which increases)
  enemyVX = enemySpeed;
  // Update the enemy's position based on its velocity
  enemyX = enemyX + enemyVX;

  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    // Reset the enemy's position
    enemyX = 0;
    enemyY = random(0,height);
    // Reset the enemy's size and speed
    enemySize = 50;
    enemySpeed = 5;
    // Reset the avatar's position
    avatarX = width/2;
    avatarY = height/2;
    // Reset the dodge counter
    dodges = 0;
  }

  // Check if the avatar has gone off the screen (cheating!)
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    enemyX = 0;
    enemyY = random(0,height);
    enemySize = 50;
    enemySpeed = 5;
    avatarX = width/2;
    avatarY = height/2;
    dodges = 0;
  }

  // Check if the enemy has moved all the way across the screen
  if (enemyX > width) {
    // This means the player dodged so update its dodge statistic
    dodges = dodges + 1;
    // Tell them how many dodges they have made
    console.log(dodges + " DODGES!");
    // Reset the enemy's position to the left at a random height
    enemyX = 0;
    enemyY = random(0,height);
    // Increase the enemy's speed and size to make the game harder
    enemySpeed = enemySpeed + enemySpeedIncrease;
    enemySize = enemySize + enemySizeIncrease;
    //Change Player size based on # of dodges
    if (dodges >= 1)
  {    avatarSize = random(20)+10; }
  if (dodges >= 4)
{    avatarSize = random(40)+8; }
if (dodges >= 8)
{    avatarSize = random(60)+5; }
  }


//Change background colour based on number of dodges
  if (dodges === 1)
    {background(244, 240, 187);}
  if (dodges === 2)
    {background(67, 41, 31);}
  if (dodges === 3)
    {background(135, 195, 143);}

//Scale up background strobing
  if (dodges >= 4)
    {randomRed = randomGaussian(255, 100);
    randomGreen = randomGaussian(255, 100);
    randomBlue = randomGaussian(255, 100);
    background(randomRed, randomGreen, randomBlue);}
  if (dodges >= 6)
    {randomRed = randomGaussian(255, 200);
    randomGreen = randomGaussian(255, 200);
    randomBlue = randomGaussian(255, 200);
    background(randomRed, randomGreen, randomBlue);}
  if (dodges >= 8) {
    randomRed = random(255);
    randomGreen = random(255);
    randomBlue = random(255);
    background(randomRed, randomGreen, randomBlue);
    image(shfiftyImage,enemyX,enemyY);
  }

  // Display the current number of successful in the console
  console.log(dodges);

  // The player is Red
  fill(218,44,56);
  // Draw the player as a square
  rect(avatarX,avatarY,avatarSize,avatarSize,20,20,20,20);
  // Draw the enemy as the star
    image(starImage,enemyX,enemyY);


  // Update Score
  textAlign(RIGHT, BOTTOM);
  textSize(72);
  var scoreText = dodges;
  text(scoreText, 475, 475);

}
