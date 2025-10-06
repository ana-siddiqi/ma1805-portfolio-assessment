function setup() {
  createCanvas(400, 400);
  background (0, 0, 200);
}

function draw() {
  //background(220);
  circle(width/2, 50, 50);
  fill(255, 0, 0)
  circle(60, mouseX, 50);
  fill(0, 255, 0)
  circle(70, 50, 50);
  fill(0, 0, 255)
  circle(80, 50, 50);

}