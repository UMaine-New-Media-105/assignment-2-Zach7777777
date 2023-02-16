//Assignment 2 question 3 Zach Smith

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 0, 300);
  fill("lightslategrey");
  //calling the Z so its in the center and the scale is 1
  drawZ(200, 200, 1);
  //calling another to show the translate and scale works
  drawZ(90, 150, 0.1);
}

function drawZ(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  //drawing the Z and translating so it starts in the upper left
  translate(-200, -200);
  beginShape();
  vertex(30, 20);
  vertex(350, 20);
  vertex(350, 75);
  vertex(95, 320);
  vertex(350, 320);
  vertex(350, 370);
  vertex(30, 370);
  vertex(30, 320);
  vertex(280, 70);
  vertex(30, 75);
  endShape(CLOSE);
  pop();
}
