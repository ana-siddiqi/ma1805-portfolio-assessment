let img;
let sound;
let video;
let capture;


function preload(){
  img = loadImage('IMG_8431.JPG');
  sound = loadSound("gentle-ocean-waves-3-300839.mp3");
  video = createVideo("compressed.mp4");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();

  video.hide();
  video.loop();
  video.volume(0);
  video.play();
 
}

function draw() {
 background(0);
image(img, 0, 100, img.width/2, img.height/2);
image(capture,50,300,320,240);
image(video, 400, 50, 320, 240);

fill(255);
textSize(32);
textAlign(CENTER, CENTER);
text("The moonlight ripples across the water the way information ripples through the internet", width /2, height - 60);
}

function mouseClicked(){
 if (!sound.isPlaying()) {
  sound.loop();
  sound.setVolume(0.5);
 }
}

if (getAudioContext().state !== 'running'){
  getAudioContext().resume();
}