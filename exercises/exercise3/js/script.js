/******************************************************************************
Where's Sausage Dog?
by Pippin Barr

An algorithmic version of a Where's Wally searching game where you
need to click on the sausage dog you're searching for in amongst all
the visual noise of other animals.

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
******************************************************************************/

// Position and image of the sausage dog we're searching for
var targetX;
var targetY;
var targetImage;
var sausageExample;

// variables for endgame movement
var endX = targetX;
var endY = targetY;
var endVX = 10;
var endVY = 15;

// The ten decoy images
var decoyImage1;
var decoyImage2;
var decoyImage3;
var decoyImage4;
var decoyImage5;
var decoyImage6;
var decoyImage7;
var decoyImage8;
var decoyImage9;
var decoyImage10;

// The number of decoys to show on the screen, randomly
// chosen from the decoy images
var numDecoys = 100;

// Keep track of whether they've won
var gameOver = false;

// preload()
//
// Loads the target and decoy images before the program starts
function preload() {
  targetImage = loadImage("assets/images/animals-target.png");
  sausageExample = loadImage("assets/images/animals-target.png");

  decoyImage1 = loadImage("assets/images/animals-01.png");
  decoyImage2 = loadImage("assets/images/animals-02.png");
  decoyImage3 = loadImage("assets/images/animals-03.png");
  decoyImage4 = loadImage("assets/images/animals-04.png");
  decoyImage5 = loadImage("assets/images/animals-05.png");
  decoyImage6 = loadImage("assets/images/animals-06.png");
  decoyImage7 = loadImage("assets/images/animals-07.png");
  decoyImage8 = loadImage("assets/images/animals-08.png");
  decoyImage9 = loadImage("assets/images/animals-09.png");
  decoyImage10 = loadImage("assets/images/animals-10.png");
}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the target
function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#ffff00");
  imageMode(CENTER);


//Physics for ellipse motion endgame
  endX = 0;
  endY = height/2;
  endVX = 100;
  endVY = 100;

//random size generator
  animalSize = (random(10,100));

  // Use a for loop to draw as many decoys as we need
  for (var i = 0; i < numDecoys; i++) {
    // Choose a random location for this decoy
    var x = random(0,width);
    var y = random(0,height);
    // Generate a random number we can use for probability
    var r = random();
    // Use the random number to display one of the ten decoy
    // images, each with a 10% chance of being shown
    // We'll talk more about this nice quality of random soon enough
    if (r < 0.1) {
      image(decoyImage1,x,y,animalSize,animalSize);
    }
    else if (r < 0.2) {
      image(decoyImage2,x,y,animalSize,animalSize);
    }
    else if (r < 0.3) {
      image(decoyImage3,x,y);
    }
    else if (r < 0.4) {
      image(decoyImage4,x,y);
    }
    else if (r < 0.5) {
      image(decoyImage5,x,y,animalSize,animalSize);
    }
    else if (r < 0.6) {
      image(decoyImage6,x,y);
    }
    else if (r < 0.7) {
      image(decoyImage7,x,y,animalSize,animalSize);
    }
    else if (r < 0.8) {
      image(decoyImage8,x,y);
    }
    else if (r < 0.9) {
      image(decoyImage9,x,y,animalSize,animalSize);
    }
    else if (r < 1.0) {
      image(decoyImage10,x,y);
    }
  }

  // Once we've displayed all decoys, we choose a location for the target
targetX = random(0,width);
targetY = random(0,height);

  //make sure it's not behind the sausageDog example icon
if((targetX >= width-100) || (targetY <= height-500)) {
  // And draw it (this means it will always be on top)
  image(targetImage,targetX,targetY);
}
else {
targetX + 100;
image(targetImage,targetX,targetY,animalSize,animalSize);
}

rectMode(CENTER);
noStroke();
fill(100,200,30,200);
rect(width-100,height-500,150,150,50,50);

  //display sausageDog example in the rectangle
image(sausageExample,width-100,height-500);

  //display text under sausageDog example
  textFont("Futura");
  textSize(10);
  textAlign(CENTER,CENTER);
  noStroke();
  fill(0);
  // Tell them they won!
  textSize(11);
  text("ceci n'est pas sausage dog",width-100,height-547);
}

function draw() {
  if (gameOver) {
    // Prepare our typography
    textFont("Helvetica");
    textSize(40);
    textAlign(CENTER,CENTER);
    noStroke();
    fill(random(255));
    // Tell them they won!
    text("Winner Winner Sausage Dinner!",mouseX,mouseY);
    noFill();
    stroke((random(255)),0,(random(255)));
    strokeWeight(10);
    ellipse(targetX,targetY,targetImage.width,targetImage.height);
    endX = randomGaussian(400,50);
    endY = randomGaussian(400,25);
    ellipse(targetX,targetY,endX,endY);
endX = width * noise(endVX);
endY = height * noise(endVY);
endVX += 0.02;
endVY += 0.03;
image(sausageExample,endX,endY);
  }
}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
  // Check if the mouse is in the x range of the target
  if (mouseX > targetX - targetImage.width/2 && mouseX < targetX + targetImage.width/2) {
    // Check if the mouse is also in the y range of the target
    if (mouseY > targetY - targetImage.height/2 && mouseY < targetY + targetImage.height/2) {
      gameOver = true;
    }
  }
}
