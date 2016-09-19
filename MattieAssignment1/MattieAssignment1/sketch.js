function setup() {
  createCanvas(400, 400); //Sets the size of the window
  background(198); //Sets the color of the background
  smooth(); //Sets anti-aliasing
  rectMode(CENTER); //Sets origin point of rectangles to center
  
}

function draw() {
  //Drawing quad
  fill(131, 234, 95); //Fills with color
  noStroke(); //No Stroke
  quad(200, 0, 400, 200, 200, 400, 0, 200); //Draws quad
  
  //Drawing triangle
  fill(255, 114, 240);
  stroke(251, 43, 136); //Sets stroke color
  strokeWeight(4) //Sets stroke thickness
  triangle(200, 1, 399, 399, 1, 399); //Draws triangle
  
  //Drawing rectangle
  fill(32, 222, 189);
  stroke(32, 162, 222);
  strokeWeight(4);
  rect(200, 200, 398, 100); //Draws rectangle (in center mode)
  
  //Drawing line
  stroke(230, 237, 26);
  strokeWeight(4);
  line(1, 1, 399, 399); //Draws line
  
  //Drawing ellipses
  fill(0, 246, 255);
  noStroke()
  ellipse(200, 200, 96, 96); //Draws ellipse
  ellipse(134, 200, 96, 96);
  ellipse(68, 200, 96, 96);
  ellipse(266, 200, 96, 96);
  ellipse(332, 200, 96, 96);
  
}