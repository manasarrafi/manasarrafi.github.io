let slider, radio, button;
let sliderValue = 127;
let radioValue = 'Option 1';

function setup() {
  createCanvas(400, 480);

  // Slider for background color
  slider = createSlider(0, 255, 127);
  slider.position(20, height + 20);
  slider.style('width', '360px');
  slider.input(updateSliderValue);

  // Radio buttons
  radio = createRadio();
  radio.option('Red');
  radio.option('Blue');
  radio.option('Green');
  radio.position(20, height + 60);
  radio.style('color', 'white');
  radio.changed(updateRadioValue);

  // Reset Button
  button = createButton('Reset');
  button.position(20, height + 100);
  button.mousePressed(resetValues);
}

function draw() {
  // Colorful gradient background
  let color1 = color(255, sliderValue, 150);
  let color2 = color(sliderValue, 150, 255);
  setGradient(0, 0, width, height, color1, color2);

  // Use radio selection to change rectangle color
  let rectColor;
  if (radioValue === 'Red') rectColor = color(255, 100, 100);
  else if (radioValue === 'Blue') rectColor = color(100, 100, 255);
  else if (radioValue === 'Green') rectColor = color(100, 255, 100);
  else rectColor = color(255);

  fill(rectColor);
  rect(150, 150, 100, 100);

  // Display values
  fill(255);
  textSize(16);
  textAlign(LEFT);
  text('Background Intensity: ' + sliderValue, 20, 350);
  text('Selected Color: ' + radioValue, 20, 380);
}

// Function to update slider value
function updateSliderValue() {
  sliderValue = slider.value();
}

// Function to update radio button selection
function updateRadioValue() {
  radioValue = radio.value();
}

// Reset function
function resetValues() {
  slider.value(127);
  radio.value('Red');
  updateSliderValue();
  updateRadioValue();
}

// Function to create a gradient
function setGradient(x, y, w, h, c1, c2) {
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

