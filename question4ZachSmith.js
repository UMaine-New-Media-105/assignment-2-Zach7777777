//This flag is a combination of Zimbabwe and Singapore
//Zach Smith
//click to show scalibility
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  //calling the function
  if (mouseIsPressed === true) {
    zsFlag(0, 0, 1);
    zsFlag(530, 180, 0.06);
  } else {
    zsFlag(0, 0, 1);
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  //THIS IS NOT MY CODE ^^^^ it is from the p5js reference https://p5js.org/examples/form-star.html
}

function zsFlag(x, y, size) {
  noStroke();
  translate(x, y);
  scale(size);
  fill(255, 108, 104);
  rect(0, 0, 600, 200);
  //drawing the bars on the bottom
  fill("black");
  rect(0, 175, 600, 53.3);
  //first red one
  fill(255, 108, 104);
  rect(0, 228.3, 600, 53.3);
  //yellow
  fill(252, 238, 167);
  rect(0, 281.6, 600, 60);
  //green
  fill(119, 221, 119);
  rect(0, 340, 600, 60);
  //drawing the lines on top
  //yellow
  fill(252, 238, 167);
  rect(0, 60, 600, 60);
  //green
  fill(119, 221, 119);
  rect(0, 0, 600, 60);
  //drawing Zimbabwe triangle thing
  // noStroke()
  fill("white");
  triangle(0, 0, 250, 200, 0, 400);
  fill(255, 105, 104);
  //making the Singapore stars and circle thingy
  circle(60, 200, 100, 100);
  fill("white");
  circle(72, 200, 90, 90);
  fill(255, 108, 104);
  push();
  rectMode(CENTER);
  rotate();
  star(79, 177, 5, 12, 5);
  star(50, 187, 5, 12, 5);
  star(99, 200, 5, 12, 5);
  star(80, 225, 5, 12, 5);
  star(52, 215, 5, 12, 5);
  pop();
}
