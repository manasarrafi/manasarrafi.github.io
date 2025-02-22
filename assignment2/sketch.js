/* citations: 
p5-a = https://p5js.org/tutorials/animating-with-media-objects/
p5-g = https://p5js.org/tutorials/get-started/
mana = my additions
*/

let harry, hermione, ron, wand; //p5-a
let imageIndex = 0; //p5-a
let alphaHarry = 0, alphaHermione = 0, alphaRon = 0; //p5-a
let fadeSpeed = 5; //p5-a

function preload() { //p5-a
  harry = loadImage("harrypotter.png"); //p5-a
  hermione = loadImage("hermionegranger.png"); //p5-a
  ron = loadImage("ronweasley.png");//p5-a
  wand = loadImage("wand.gif"); //p5-a
}

function setup() { //p5-a
  createCanvas(700, 500); //mana
  colorMode(HSB); // mana
  noStroke(); // mana

  // Resize images to fit within a third of the canvas width
  harry.resize(120, 0); //p5-a
  hermione.resize(135, 0); //p5-a
  ron.resize(150, 0); //p5-a

  // Load wand GIF using createImg
  wand = createImg("wand.gif"); //p5-a
  
  wand.style("pointer-events", "none"); // Prevent interaction // mana
  wand.hide(); // mana
}

function draw() { //mana
  drawBackground(); //mana

  // Move wand GIF to follow the mouse
  wand.position(mouseX - 25, mouseY - 25); //p5-a
  if (mousePressed) {//p5-a
    wand.show(); //p5-a
  } else {//p5-a
    wand.hide(); // mana
  }

 
  let yPos = height / 2 - 60; // Center images vertically //mana
  
  // Display images with fade-in effect, placed side by side
  if (imageIndex >= 1) { // mana
    alphaHarry = min(alphaHarry + fadeSpeed, 255); //mana
    tint(255, alphaHarry); //mana 
    image(harry, width / 6 - 50, yPos); //mana
  }
  if (imageIndex >= 2) { //mana
    alphaHermione = min(alphaHermione + fadeSpeed, 255); //mana
    tint(255, alphaHermione); //mana
    image(hermione, width / 2 - 90, yPos); //mana
  }
  if (imageIndex >= 3) { //mana
    alphaRon = min(alphaRon + fadeSpeed, 255); //mana
    tint(255, alphaRon); //mana
    image(ron, (5 * width) / 6 - 100, yPos); //mana
  }
  noTint(); //mana
}

function mousePressed() {//mana
  if (imageIndex < 3) { //mana
    imageIndex++;  // Move to the next image on each click//mana
  }
}

function drawBackground() { //p5-g
  let colorC = color(240, 100, 100); // p5-g
  let colorA = color(0, 100, 100); // p5-g
  let colorB = color(140, 80, 40); // p5-g
  let stripeCount = 70; //p5-g
  let stripeHeight = height / stripeCount;//p5-g

  for (let y = 0; y < height; y += stripeHeight) { //p5-g
    let fadeAmount = y / height; //p5-g
    let betweenColor;// p5-g
    if (fadeAmount < 0.5) {//p5-g
      betweenColor = lerpColor(colorA, colorC, fadeAmount * 2); //p5-g
    } else { //p5-g
      betweenColor = lerpColor(colorC, colorB, (fadeAmount - 0.5) * 2); //p5-g
    } //p5-g
    fill(betweenColor); //p5-g
    rect(0, y, width, stripeHeight); //p5-g
  }
}

