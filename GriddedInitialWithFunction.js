var size = 80;
var x = 0;
var y = 0;
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  //drawing squares
  squareRow(0, 0, 80);
  squareRow(0, 80, 80);
  squareRow(0, 160, 80);
  squareRow(0, 240, 80);
  squareRow(0, 320, 80);
  //drawing the z
  drawZ();
}
//creating the function for the rows of sqaures
function squareRow(x, y, size) {
  fill(300, 0, 300);
  rect(x, y, 80);
  rect(x + 80, y, 80);
  rect(x + 160, y, 80);
  rect(x + 240, y, 80);
  rect(x + 320, y, 80);
}
//drawing the z
function drawZ() {
  fill(100, 0, 300);
  rect(x, y, 80);
  rect(x + 80, y, 80);
  rect(x + 160, y, 80);
  rect(x + 240, y, 80);
  rect(x + 320, y, 80);
  rect(x + 240, y + 80, 80);
  rect(x + 160, y + 160, 80);
  rect(x + 80, y + 240, 80);

  rect(x, 320, 80);
  rect(x + 80, 320, 80);
  rect(x + 160, 320, 80);
  rect(x + 240, 320, 80);
  rect(x + 320, 320, 80);
}
