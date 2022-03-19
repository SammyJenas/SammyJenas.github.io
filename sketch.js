// Sammy Jenas
// Landing page for GitHub
// https://sammyjenas.github.io/
// March 2022

let ip;
let sammyjenas;
let font1;

function getIP() {
  fetch('https://api.ipify.org?format=json')
    .then(results => results.json())
    .then(data => (ip = data.ip))
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  font1 = loadFont('AcPlus_IBM_VGA_8x16.ttf');
  textFont(font1);
  getIP();
  sammyjenas = 'Sammy Jenas';
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  if (frameCount % 60 === 0) {
    nameChange();
  }
  fill(255);
  textSize(20);
  text('You: ' + ip, 70, 70);
  text('Me: ' + sammyjenas, 70, 110);
}

function nameChange() {
  let shift = int(random(0, 5));
  switch (shift) {
    case 0:
      sammyjenas = 'Sammy Jenas';
      break;
    case 1:
      sammyjenas = 'Sammee Jenas';
      break;
    case 2:
      sammyjenas = 'Sami Jenas';
      break;
    case 3:
      sammyjenas = 'Sammy Genus';
      break;
    case 4:
      sammyjenas = 'Sammee Genus';
      break;
    case 5:
      sammyjenas = 'Sami Genus';
  }
}
