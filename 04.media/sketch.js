let img;
let hum;
let capture;

function preload(){
  img = loadImage('Antenna.jpg');
  hum = loadSound("humm.wav");
  video = createVideo("TheSea.mov");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(320,240)
  capture.hide();

  video.hide();
  video.play
}

function draw() {
  background(220);
image(img, 0, 100, img.width/2, img.height/2);
image(capture,200,200,320,240);
filter(INVERT);
image(video, 300, 30, 240, 320);
}

function mouseClicked(){
  hum.loop();
  hum.amp(0.5);
  video.loop(0.2);
  video.amp(0.2);
  if(getAudioContext().state !== 'running'){
  getAudioContext().resume()
}
}