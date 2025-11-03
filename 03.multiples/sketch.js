let select = 0; 
let size = 30; 
let rgba = [255, 255, 100, 180];

const colors = [
  [255, 255, 100, 180],
  [173, 216, 230, 180],
  [255, 182, 193, 180],
  [240, 230, 140, 180],
  [230, 230, 250, 180]
];


function setup() {
  noStroke(); 
  createCanvas(800, 800);
  background(135, 206, 235);
}

function draw() {
  fill(rgba);
  ellipse(mouseX, mouseY, size, size);
  if(select!=2){
    size = random(20, 100);
  }
}

function mouseClicked() {
  
   console.log('select: '+select); 
  
  rgba[select] = random(0,155); 
  rgba[3] = random(120, 200);
  select++; 
 
  if(select >= 3){ 
    console.log('reset select'); 
    select = 0; 
  }
  return false; 
}