let circleX = 0;
let circleY = 150;
let circleSize = 64;
let speed = 4;

function setup() {
 createCanvas(400, 300);
 background(0);
}

function draw() {
 background(153, 235, 255);
 noStroke();
 fill(255, 255, 77);
 circle(circleX, circleY, circleSize);
 

 circleX += speed;

  if (circleX - circleSize/2 > width){
  circleX =-circleSize/2;
 }

}

function mousePressed(){
  background(0);
  circleX = 0;
}