/* eslint-disable no-undef, no-unused-vars */

// inspired by Tim Rodenbröker & his youtube channel
// So Tim if you being there - thank you!
// https://www.youtube.com/watch?v=KL_b6eTm9Ag&t=1934s

// const variables
const fr = 60;
const pd = 1.0;
const cW = 1312 + 656;
const cH = 896;
const wW = 584;
const wH = 810;

//
const sq = 40;

// variables
let images = [];
let currentImage, bufferSourse, bufferTarget;
let source, target, result; // canvases
let sx, sy, sw, sh, dx, dy, dw, dh; // copy

// interface
let button;

// TILE for result
// One PIXEL
let TILES_X = 70;
let TILES_Y = 50;
let tileW, tileH;
let px, py;

// magic effects
let c, b, s; // colour, brightness, s..?

function preload() {
  for (i = 1; i <= 4; i++) {
    images.push(loadImage(`img/${i}.JPG`));
  }
}

function setup() {
  // basic setup
  frameRate(fr);

  // main canvas
  createCanvas(cW, cH);

  // canvases setup
  source = createGraphics(wW, wH);
  target = createGraphics(wW, wH);
  result = createGraphics(wW, wH);

  // first image on drawTarget
  currentImage = images[0];
}
//
function draw() {
  // draw functions
  drawTarget();
  drawSource();
  drawResult();

  // frames
  image(source, 0, 0);
  image(target, wW, 0);
  image(result, wW * 2, 0);

  // copy brush
  noFill();
  stroke(255, 255, 255);
  rect(mouseX, mouseY, sq, sq);

  // paste brush
  noFill();
  stroke(255, 0, 255);
  rect(mouseX + wW, mouseY, sq, sq);
}

function drawSource() {
  // drawSource
  source.background(20, 8);
  source.image(currentImage, 0, 0);
}

function drawTarget() {
  // setup copy parameters
  sx = mouseX;
  sy = mouseY;
  sw = sq;
  sh = sq;
  dx = mouseX;
  dy = mouseY;
  dw = sq;
  dh = sq;

  // copy picture to buffer
  sourceBuffer = source.get();

  // freeze background
  if (frameRate === 1) {
    target.background(0);
  }

  //copy-paste square
  if (mouseIsPressed) {
    target.copy(sourceBuffer, sx, sy, sw, sh, dx, dy, dw, dh);
  }
}

function drawResult() {
  // ???
  // px = x * tileW;
  // py = y * tileH;

  // decrease Canvas resolution
  tileW = result.width / TILES_X;
  tileH = result.height / TILES_Y;

  // color from bufferTarget pixel
  // c = bufferTarget.get(px, py);
  // console.log(c);
  // brightness b value to 255
  // b = brightness(c);

  // black&white effect
  // s = map(b, 0, 255, 1, 0);

  // copy from source data
  // bufferSourse = source.get();

  // BG COLOR
  // result.background(241, 241, 241);
  // result.fill(0);
  // result.noStroke();

  // result.loadPixels();

  // working with pixels
  for (let x = 0; x < wW; x++) {
    for (let y = 0; y < wH; y++) {
      // let rand = random(255);
      // let c = color(rand);
      // result.pixels[x] = c;
      // result.pixels[y] = c;
      // result.translate(x * tileW, y * tileH);
      // result.rect(0, 0, tileW * s, tileH * s);
      // pixels[loc] = color(r, g, b);
    }
  }
  // result.updatePixels();
}

// key change image
function keyPressed() {
  if (keyCode === 49) {
    currentImage = images[0];
    console.log(currentImage);
  }
  if (keyCode === 50) {
    currentImage = images[1];
    console.log(currentImage);
  }
  if (keyCode === 51) {
    currentImage = images[2];
  }
  if (keyCode === 52) {
    currentImage = images[3];
  }

  // consoles
  console.log(key, "key");
  console.log(keyCode, "KeyCode");
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
