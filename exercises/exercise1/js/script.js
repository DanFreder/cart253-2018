// Exercise 1 - Moving pictures
// Pippin Barr - Edited by Dan Freder
//
// Starter code for exercise 1.
// It moves two pictures around on the canvas.
// One moves linearly down the screen.
// One moves toward the mouse cursor.
// Dan added one that moves left to right
// Dan added another that follows the mouse


// The image of a clown face
var clownImage;
// The current position of the clown face
var clownImageX;
var clownImageY;

// The transparent image of "felt" that wipes down the canvas
var feltTextureImage;
// The current position of the transparent image of "felt"
var feltTextureImageX;
var feltTextureImageY;

// The Glitchy Image Dan added
var glitchImage;
// The position of the Glitchy Image
var glitchImageX;
var glitchImageY;

// The msp Image Dan added
var mspImage;
// The position of the msp Image
var mspImageX;
var mspImageY;

// The tahoe Image Dan added
var tahoeImage;
// The position of the tahoe Image
var tahoeImageX;
var tahoeImageY;

// The Green Glitch Image Dan added
var greenGlitchImage;
// The position of the greenGlitchImage
var greenGlitchImageX;
var greenGlitchImageY;

// preload()
//
// Load the two images we're using before the program starts

function preload() {
  clownImage = loadImage("assets/images/clown.png");
  feltTextureImage = loadImage("assets/images/black-felt-texture.png");
  glitchImage = loadImage("assets/images/Glitchy.png");
  mspImage = loadImage("assets/images/msp.png");
  tahoeImage = loadImage("assets/images/tahoe.png");
  greenGlitchImage = loadImage("assets/images/greenglitch.png");
}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);

  // Start the clown image at the centre of the canvas
  clownImageX = width/2;
  clownImageY = height/2;

  // Start the greenglitch image off with ramps
  greenGlitchImageX = sin(30);
  greenGlitchImageY = sin(45);

  // Start the tahoe image at the centre of the canvas
  tahoeImageX = width/2;
  tahoeImageY = height/2;

  // Start the felt image perfectly off screen above the canvas
  feltTextureImageX = width/2;
  feltTextureImageY = 0 - feltTextureImage.height/2;

  // Start the Glitchy image at the left of the canvas
  glitchImageX = width-320;
  glitchImageY = height/2;

  // Start the msp image at the centre of the canvas
  mspImageX = width/2;
  mspImageY = height/2;

  // We'll use imageMode CENTER for this script
  imageMode(CENTER);
}


// draw()
//
// Moves the felt image linearly
// Moves the clown face toward the current mouse location

function draw() {

  // Move the Glitch image right by increasing its x position
  glitchImageY=0;
  glitchImageX += .25;

  // Display the Glitch image
  image(glitchImage,glitchImageX,glitchImageY);

  // Move the clown by moving it 1/10th of its current distance from the mouse

  // Calculate the distance in X and in Y
  var xDistance = mouseX - clownImageX;
  var yDistance = mouseY - clownImageY;
  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  clownImageX = clownImageX + xDistance/10;
  clownImageY = clownImageY + yDistance/10;

  // Display the clown image
  image(clownImage,clownImageX,clownImageY);

  // Move mspImage according to the mouse position
  image(mspImage,mouseX,mouseY);

  // Move tahoeImage according to the mouse position in relation to ClownImage
  image(tahoeImage,mouseX*(clownImageX/50),mouseY*(clownImageY/50));

  // Move the felt image down by increasing its y position
  feltTextureImageY += 1;

  // Display the felt image
  image(feltTextureImage,feltTextureImageX,feltTextureImageY);

  // Display the greenglitch image
  image(greenGlitchImage,(greenGlitchImageX),greenGlitchImageY);

}
