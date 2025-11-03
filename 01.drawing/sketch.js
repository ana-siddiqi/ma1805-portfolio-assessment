function setup(){
  createCanvas(400, 400);
}

function draw(){
  fill(255, 0, 0);
  background(100, 150, 255);

  //face
  fill(255, 200, 0);
  circle(200,200,250);

  //mouth
 fill(0,0,0);
 ellipse(200, 220, 30, 90);

  //eyes
  fill(0,0,0);
  circle(150,150,60);
  fill(0,0,0);
  circle(250,150,60);

  //pupils
  fill(255);
  circle(150,150, 20);
  fill(255);
  circle(250,150, 20)

  //outline
  fill(0);
  stroke(0);
  strokeWeight(5);
  arc(200,220,100,60,0);

  
}