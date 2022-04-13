// Sammy Jenas
// Landing page for GitHub
// https://sammyjenas.github.io/
// April 2022

const { userAgent } = navigator
let ip;
let city;
let country;
let cityCountry;
let browser;
let os;
let osBrowser;
let userLang;
let names = ['Sammy Jenas', 'Sammee Jenas', 'Sami Jenas', 
'Sammy Genus', 'Sammee Genus', 'Sami Genus',
'Sammy Dzienas', 'Sammee Dzienas', 'Sami Dzienas'];
let sammyJenas;
let you = ' You ';
let me = ' I ';
let description = 'Artist-researcher';
let font1;
let ready = false;
let download = 'Download';
let buttonWidth = 90;
let buttonWidth2 = 200;
let centreBox4 = 200;
let centreBox5 = 600;
let maxWidth2;

function getIP() {
  fetch('https://api.ipify.org?format=json')
    .then(results => results.json())
    .then(data => (ip = data.ip));
}

function getNavigator(){
  if (userAgent.includes('Edg/')) {
    browser = 'Edge';
  } else if (userAgent.includes('CriOS/')) {
    browser = 'Chrome';
  } else if (userAgent.includes('Chrome/')) {
    browser = 'Chrome';
  } else if (userAgent.includes('FxiOS/')) {
    browser = 'Firefox';
  } else if (userAgent.includes('Firefox/')) {
    browser = 'Firefox';
  } else if (userAgent.includes('MSIE/')) {
    browser = 'Internet Explorer';
  } else if (userAgent.includes('OPR/')) {
    browser = 'Opera';
  } else if (userAgent.includes('SamsungBrowser/')) {
    browser = 'Samsung';
  } else if (userAgent.includes('HuaweiBrowser/')) {
    browser = 'Huawei';
  } else if (userAgent.includes('Safari/')) {
    browser = 'Safari';
  }

  if (userAgent.includes('Windows')) {
    os = 'Windows';
  } else if (userAgent.includes('Mac')) {
    os = 'macOS';
  } else if (userAgent.includes('Android')) {
    os = 'Android';
  } else if (userAgent.includes('Linux')) {
    os = 'Linux';
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  font1 = loadFont('AcPlus_IBM_VGA_8x16.ttf', ready = true);
  textFont(font1);
  getLang();
  getNavigator();
  getIP();
  sammyJenas = names[int(random(0, names.length))];
  rectMode(CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  textSize(20);
  if (ready) {
    if (frameCount % 60 === 0) {
      sammyJenas = names[int(random(0, names.length))];
    }
    textAlign(LEFT, CENTER);
    if (ip !== undefined) {
      text(ip, 70, 85);
    }
    // if (city !== undefined && country !== undefined) {
    //   cityCountry = city + ', ' + country;
    //   text(cityCountry, 70, 115);
    // }
    if (userLang !== undefined) {
      text(userLang, 70, 115);
    }
    if (os !== undefined && browser !== undefined) {
      osBrowser = browser + ' on ' + os;
      text(osBrowser, 70, 145);
    }
    // calculations for 'You'
    let widths = [textWidth(ip), textWidth(cityCountry), textWidth(userLang), textWidth(osBrowser)];
    let maxWidth = max(widths) + 90;
    let centreBox = 70 + max(widths) / 2;
    // calculations for 'Me'
    let widths2 = [textWidth(sammyJenas), textWidth(description)];
    maxWidth2 = maxWidth + 140 + max(widths2);
    let centreBox2 = maxWidth + 120 + max(widths2) / 2;
    // text for 'You' and 'Me'
    text(sammyJenas, maxWidth + 120, 85);
    text(description, maxWidth +120, 115);
    textAlign(CENTER, CENTER);
    text(you, centreBox, 50);
    text(me, centreBox2, 50);
    // calculations & text for Time box
    let timer = nf(second(), 2, 0);
    let width3 = textWidth(timer);
    let centreBox3 = maxWidth + 50;
    text(timer, centreBox3, 345);
    // Ultimate Machine download button
    noFill();
    stroke(255);
    strokeWeight(1);
    rect(centreBox4 - 65, 628, buttonWidth, 43);
    let c1;
    let c2;
    if (mouseX >= centreBox4 - 65 - buttonWidth /2 + 4 && mouseX <= centreBox4 - 65 + buttonWidth /2 - 4 && mouseY >= 610 && mouseY <= 646) {
        c1 = color(0, 255, 255);
        c2 = color(0);
      } else {
        c1 = color(100);
        c2 = color(255);
      }
    fill(c1);
    rect(centreBox4 - 65, 628, buttonWidth - 8, 35);
    // text for Ultimate Machine download button
    fill(c2);
    noStroke();
    text('Download', centreBox4 - 65, 628);
    // Ultimate Machine code button
    noFill();
    stroke(255);
    strokeWeight(1);
    rect(centreBox4 + 65, 628, buttonWidth, 43);
    let c11;
    let c22;
    if (mouseX >= centreBox4 + 65 - buttonWidth /2 + 4 && mouseX <= centreBox4 + 65 + buttonWidth /2 - 4 && mouseY >= 610 && mouseY <= 646) {
        c11 = color(0, 255, 255);
        c22 = color(0);
      } else {
        c11 = color(100);
        c22 = color(255);
      }
    fill(c11);
    rect(centreBox4 + 65, 628, buttonWidth - 8, 35);
    // text for Ultimate Machine code button
    fill(c22);
    noStroke();
    text('Code', centreBox4 + 65, 628);
    // Artificial Dust Breeding view button
    noFill();
    stroke(255);
    strokeWeight(1);
    rect(centreBox5 - 65, 628, buttonWidth, 43);
    let cc1;
    let cc2;
    if (mouseX >= centreBox5 - 65 - buttonWidth /2 + 4 && mouseX <= centreBox5 - 65 + buttonWidth /2 - 4 && mouseY >= 610 && mouseY <= 646) {
        cc1 = color(0, 255, 255);
        cc2 = color(0);
      } else {
        cc1 = color(100);
        cc2 = color(255);
      }
    fill(cc1);
    rect(centreBox5 - 65, 628, buttonWidth - 8, 35);
    // Artificial Dust Breeding code button
    noFill();
    stroke(255);
    strokeWeight(1);
    rect(centreBox5 + 65, 628, buttonWidth, 43);
    let ccc1;
    let ccc2;
    if (mouseX >= centreBox5 + 65 - buttonWidth /2 + 4 && mouseX <= centreBox5 + 65 + buttonWidth /2 - 4 && mouseY >= 610 && mouseY <= 646) {
        ccc1 = color(0, 255, 255);
        ccc2 = color(0);
      } else {
        ccc1 = color(100);
        ccc2 = color(255);
      }
    fill(ccc1);
    rect(centreBox5 + 65, 628, buttonWidth - 8, 35);
    // text for Artificial Dust Breeding view button
    fill(cc2);
    noStroke();
    text('View', centreBox5 - 65, 628);
    // text for Artificial Dust Breeding code button
    fill(ccc2);
    text('Code', centreBox5 + 65, 628);
    
    // ARTSCLOUD interview button
    noFill();
    stroke(255);
    strokeWeight(1);
    rect(maxWidth2 + 240, 150, buttonWidth2, 43);
    let d1;
    let d2;
    if (mouseX >= maxWidth2 + 240 - buttonWidth2 /2 + 4 && mouseX <= maxWidth2 + 240 + buttonWidth2 /2 - 4 && mouseY >= 132 && mouseY <= 168) {
        d1 = color(0, 255, 255);
        d2 = color(0);
      } else {
        d1 = color(100);
        d2 = color(255);
      }
    fill(d1);
    rect(maxWidth2 + 240, 150, buttonWidth2 - 8, 35);
    fill(d2);
    noStroke();
    text('ArtsCloud Interview', maxWidth2 + 240, 150);
    
    // Hole in the Mirror Machine button
    noFill();
    stroke(255);
    strokeWeight(1);
    rect(maxWidth2 + 240, 220, buttonWidth2, 43);
    let dd1;
    let dd2;
    if (mouseX >= maxWidth2 + 240 - buttonWidth2 /2 + 4 && mouseX <= maxWidth2 + 240 + buttonWidth2 /2 - 4 && mouseY >= 202 && mouseY <= 238) {
        dd1 = color(0, 255, 255);
        dd2 = color(0);
      } else {
        dd1 = color(100);
        dd2 = color(255);
      }
    fill(dd1);
    rect(maxWidth2 + 240, 220, buttonWidth2 - 8, 35);
    fill(dd2);
    noStroke();
    text('Hole in the M. Machine', maxWidth2 + 240, 220);

    // Academic profile button
    noFill();
    stroke(255);
    strokeWeight(1);
    rect(maxWidth2 + 240, 290, buttonWidth2, 43);
    let e1;
    let e2;
    if (mouseX >= maxWidth2 + 240 - buttonWidth2 /2 + 4 && mouseX <= maxWidth2 + 240 + buttonWidth2 /2 - 4 && mouseY >= 272 && mouseY <= 308) {
        e1 = color(0, 255, 255);
        e2 = color(0);
      } else {
        e1 = color(100);
        e2 = color(255);
      }
    fill(e1);
    rect(maxWidth2 + 240, 290, buttonWidth2 - 8, 35);
    fill(e2);
    noStroke();
    text('Academic Profile', maxWidth2 + 240, 290);

    // GitHub button
    noFill();
    stroke(255);
    strokeWeight(1);
    rect(maxWidth2 + 240, 360, buttonWidth2, 43);
    let f1;
    let f2;
    if (mouseX >= maxWidth2 + 240 - buttonWidth2 /2 + 4 && mouseX <= maxWidth2 + 240 + buttonWidth2 /2 - 4 && mouseY >= 342 && mouseY <= 378) {
        f1 = color(0, 255, 255);
        f2 = color(0);
      } else {
        f1 = color(100);
        f2 = color(255);
      }
    fill(f1);
    rect(maxWidth2 + 240, 360, buttonWidth2 - 8, 35);
    fill(f2);
    noStroke();
    text('GitHub Profile', maxWidth2 + 240, 360);

    // text for Ultimate Machine
    noStroke();
    fill(255);
    text('Ultimate Machine', centreBox4, 500);
    textAlign(LEFT, CENTER);
    // text('Ultimate Machine', 70, 515);
    text('0.0 Vapour', 70, 545);
    text('Windows', 70, 575);
    // text for Artificial Dust Breeding box
    textAlign(CENTER, CENTER);
    text('Artificial Dust Breeding', centreBox5, 500);
    textAlign(LEFT, CENTER);
    text('1.0 Beta', 470, 545);
    text('Online', 470, 575);
    // boxes
    noFill();
    stroke(255);
    strokeWeight(1);
    // 'You' box
    beginShape();
    vertex(centreBox + textWidth(you)/2, 50);
    vertex(maxWidth, 50);
    // vertex(maxWidth, 210);
    vertex(maxWidth, 180);
    // vertex(50, 210);
    vertex(50, 180);
    vertex(50, 50);
    vertex(centreBox - textWidth(you)/2, 50);
    endShape();
    // 'Me' box
    beginShape();
    vertex(centreBox2 + textWidth(me)/2, 50);
    vertex(maxWidth2, 50);
    vertex(maxWidth2, 150);
    vertex(maxWidth + 100, 150);
    vertex(maxWidth + 100, 50);
    vertex(centreBox2 - textWidth(me)/2, 50);
    endShape();
    // Time box
    rect(centreBox3, 345, width3 + 40, 70);
    // Ultimate Machine box
    rect(centreBox4, 580, 300, 200);
    line(centreBox4 - 140, 522, centreBox4 + 140, 522);
    // Artificial Dust Breeding box
    rect(centreBox5, 580, 300, 200);
    line(centreBox5 - 140, 522, centreBox5 + 140, 522);
    // lines between 'You' and 'Me'
    line(centreBox, 180, centreBox, 260);
    line(centreBox2, 150, centreBox2, 260);
    line(centreBox, 260, centreBox2, 260);
    line(maxWidth + 50, 260, maxWidth + 50, 310);
    // lines from time box down and bar below
    line(centreBox3, 380, centreBox3, 430);
    line(centreBox4, 430, centreBox5, 430);
    // line from bar to Ultimate Machine box
    line(centreBox4, 430, centreBox4, 480);
    // line from bar to Artificial Dust Breeding box
    line(centreBox5, 430, centreBox5, 480);
    // lines from 'Me' to other boxes
    line(maxWidth2, 100, maxWidth2 + 100, 100);
    line(maxWidth2 + 100, 100, maxWidth2 + 100, 360);
    // line to ARTSCLOUD interview button
    line(maxWidth2 + 100, 150, maxWidth2 + 140, 150);
    // line to Hole in the Mirror Machine button
    line(maxWidth2 + 100, 220, maxWidth2 + 140, 220);
    // line to Academic profile button
    line(maxWidth2 + 100, 290, maxWidth2 + 140, 290);
    // line to GitHub button
    line(maxWidth2 + 100, 360, maxWidth2 + 140, 360);
    // noStroke otherwise affects font
    noStroke();
  }
}

function mousePressed() {
  if (mouseX >= centreBox4 - 65 - buttonWidth /2 + 4 && mouseX <= centreBox4 - 65 + buttonWidth /2 - 4 && mouseY >= 610 && mouseY <= 646) {
    window.location.href = 'https://drive.google.com/uc?export=download&id=1UXibvkwksSctqXL37sg9wpepP3gdYfrY';
  } else if (mouseX >= centreBox4 + 65 - buttonWidth /2 + 4 && mouseX <= centreBox4 + 65 + buttonWidth /2 - 4 && mouseY >= 610 && mouseY <= 646) {
    window.location.href = 'https://github.com/SammyJenas/Ultimate-Machine';
  } else if (mouseX >= centreBox5 - 65 - buttonWidth /2 + 4 && mouseX <= centreBox5 - 65 + buttonWidth /2 - 4 && mouseY >= 610 && mouseY <= 646) {
    window.location.href = 'https://sammyjenas.github.io/artificial-dust-breeding/';
  } else if (mouseX >= centreBox5 + 65 - buttonWidth /2 + 4 && mouseX <= centreBox5 + 65 + buttonWidth /2 - 4 && mouseY >= 610 && mouseY <= 646) {
    window.location.href = 'https://github.com/SammyJenas/artificial-dust-breeding';
  } else if (mouseX >= maxWidth2 + 240 - buttonWidth2 /2 + 4 && mouseX <= maxWidth2 + 240 + buttonWidth2 /2 - 4 && mouseY >= 132 && mouseY <= 168) {
    window.location.href = 'https://vimeo.com/698974664';
  } else if (mouseX >= maxWidth2 + 240 - buttonWidth2 /2 + 4 && mouseX <= maxWidth2 + 240 + buttonWidth2 /2 - 4 && mouseY >= 202 && mouseY <= 238) {
    window.location.href = 'https://vimeo.com/698989275';
  } else if (mouseX >= maxWidth2 + 240 - buttonWidth2 /2 + 4 && mouseX <= maxWidth2 + 240 + buttonWidth2 /2 - 4 && mouseY >= 272 && mouseY <= 308) {
    window.location.href = 'https://unidirectory.auckland.ac.nz/profile/lbal452';
  } else if (mouseX >= maxWidth2 + 240 - buttonWidth2 /2 + 4 && mouseX <= maxWidth2 + 240 + buttonWidth2 /2 - 4 && mouseY >= 342 && mouseY <= 378) {
    window.location.href = 'https://github.com/SammyJenas';
  }
}