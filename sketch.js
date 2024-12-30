//Nandana Elizabeth - 1226258776
//HONORS PROJECT - Color Visualizer
/*

This project is an interactive color visualizer 
where the user can move the sliders to change the
R G B values.

The circle in the center of the R G B circles is the 
resulting color based on the R G B values.

The numerical R G B values are displayed on the left
of the Color Visualizer, and the squares on the right
display the colors with the different combinations of the values,
i.e., RG, RB, and GB.

The Hue, Saturation, and Brightness values are displayed
at the bottom, rounded to the next integer.

*/

let r = 255;
let g = 255;
let b = 255; 

let x = 300;
let y = 200;
let change = 201;
let space = 2;

let slider1;
let slider2;
let slider3;

let c; //color
let hueValue; //hue
let saturationValue; //saturation
let brightnessValue; //brightness

function setup() {
  createCanvas(900, 900);
  colorMode(RGB);
  drawSliders();
}

function draw() {
  background(0);
  //title text
  noStroke();
  fill(255, 255, 255);
  textFont("Arial");
  textStyle(BOLDITALIC);
  textSize(45);
  textAlign(CENTER, BASELINE);
  text("Color Visualizer", 400, 50);
  textSize(40);

  //create 3 circles to display the color of r, g, b
  //have an overlapping circle that will be the exact color of the values of rgb
  //create 3 sliders for r, g, b
  r = slider1.value();
  g = slider2.value();
  b = slider3.value();

  fill(255, 0, 0);
  text("R: ", 80, 120);
  fill(0, 255, 0);
  text("G: ", 80, 240);
  fill(0, 0, 255);
  text("B: ", 80, 380);
  

  fill(255, 0, 0);
  text(r, 130, 120);
  fill(0, 255, 0);
  text(g, 130, 240);
  fill(0, 0, 255);
  text(b, 130, 380);

  textSize(30);

  fill(255, 0, 0);
  text("R", 100, 540);
  fill(0, 255, 0);
  text("G", 100, 570);
  fill(0, 0, 255);
  text("B", 100, 600);

  
  //colorMode(HSB);
  c = color(r, g, b);
  hueValue = hue(c);
  saturationValue = saturation(c);
  brightnessValue = brightness(c);

  fill(255);
  text("Hue", 145, 670);
  text("Saturation", 370, 670);
  text("Brightness", 650, 670);

  fill(hueValue, saturationValue, brightnessValue);
  text(ceil(hueValue), 140, 720);
  text(ceil(saturationValue), 365, 720);
  text(ceil(brightnessValue), 650, 720);

  drawCircles();
  drawRectangles();
  //reset button
}

function drawCircles(){
  strokeWeight(3);
  fill(r, 0, 0);
  stroke(255, 0, 0);
  ellipse(x, y, 200);

  fill(0, g, 0); 
  stroke(0, 255, 0);
  ellipse(x + space + change, y, 200);

  fill(0, 0, b);
  stroke(0, 0, 255);
  ellipse(x + change/2, y + space + change - 25, 200);

  fill(r, g, b);
  stroke(255);
  ellipse(x + change/2, y + change/2 - 6*space, 150);
}

function drawRectangles(){
  fill(0);
  text("RG", 685, 100);
  text("RB", 685, 240);
  text("GB", 685, 380);
  fill(r, g, 0);
  rect(650, 120, 80, 80);
  fill(r, 0, b);
  rect(650, 260, 80, 80);
  fill(0, g, b);
  rect(650, 400, 80, 80);
}

function drawSliders(){
  slider1 = createSlider(0, 255, 0);
  slider1.position(120, 525);
  slider1.size(500);

  slider2 = createSlider(0, 255, 0);
  slider2.position(120, 550);
  slider2.size(500);

  slider3 = createSlider(0, 255, 0);
  slider3.position(120, 575);
  slider3.size(500);
}

//hue saturation value and rgb numbers display