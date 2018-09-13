/*****************

Exercise 0
Dan Freder

This was a template. Dan filled in the title,
author, and this lame description.

******************/

// setup()
//
// Draw a garish, cartoony face that looks like
// garbage because you don't know what you're doing lol

function setup() {

// setting up the canvas and giving it a green colour

createCanvas (500, 500);
background(10,200,100)

// drawin the head + body

noStroke();
// i'm blue dabadeedabadie
fill(20,10,200);
// ellipse mode for alignment
ellipseMode(CENTER);
// givinsomehead
ellipse(250,250,200,200);
// body
ellipse(250,400,300,400);

//glasses
strokeWeight(4);
fill(0,0,0,255);
ellipse(200,240,55,55);
ellipse(300,240,55,55);
stroke(0);
line(226,240,274,240);

//glasses arms
stroke(0);
line(150,240,350,240);

// great googly moogly

fill(255,0,0);
ellipse(200,240,50,50);
ellipse(300,240,50,50);

fill (0)
ellipse(215,225,10,10);
ellipse(315,225,10,10);

// follow your nose
noStroke();
// nose colour
fill(20,100,200);
ellipse(250,260,40,79)
// nostrils
ellipse(235,290,50,50);
ellipse(265,290,50,50);

//lip colour
fill(255, 70, 40);
//lips
ellipse (250,340,100,25);
// lip divider colour and size
stroke(255,120,120);
strokeWeight(4);
// Lip divider
line(200,340,300,340)

// FatCatHat
noStroke();
// Hat colour
fill(200,255,200);
// Hat brim
rect(100,175,300,10);
// MainHat
rect(160,100,180,80);
// Band colour
fill(100,100,100);
// Hat Band
rect(160,165,180,10);


// new planet!


fill(0)
ellipse(420,75,50,50)

fill(200, 0, 255);
ellipse (420,75,100,25);

fill(0)
ellipse(420,75,12,12)

// cosmic rays
stroke(0,255,0);
strokeWeight(4);
line(400,100,250,200)
line(400,100,300,200)
line(400,100,350,200)

//testing the print/console feature

console.log("Help! I'm stuck inside a program!");

}

// draw()
//
// Description of draw()

function draw() {

}
