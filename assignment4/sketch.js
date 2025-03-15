
let particles = []; // Array to store particle objects
let colors = ["red", "blue", "green", "yellow", "purple", "orange"]; // Expanded color array
let words = ["one", "direction", "is", "the", "best", "band", "lol"]; // Expanded word array
function setup() {
  createCanvas(600, 400);
  let button = createButton("Add Particle"); // Create a button
  button.mousePressed(() => {
    for (let i = 0; i < 3; i++) { // Add multiple particles on button press
      particles.push(new Particle(random(width), random(height)));
    }
  });
}

function draw() {
  background(0, 50); // Add slight transparency for a trailing effect
  
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isDead()) {
      particles.splice(i, 1); // Remove dead particles
    }
  }
  
  fill(255);
  textSize(16);
  text("Words: " + words.join(" | "), 20, height - 20); // Using .join() method with a separator
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-2, 2)); // Increased speed
    this.lifespan = 500; // Further increased lifespan
    this.size = random(5, 15); // Randomized size
    this.color = color(random(255), random(255), random(255)); // Random RGB color
  }
  
  update() {
    this.position.add(this.velocity);
    this.lifespan -= 1; // Slower fade-out
    this.velocity.mult(0.99); // Gradually slow down movement
  }
  
  display() {
    fill(this.color, this.lifespan); // Fade effect
    noStroke();
    ellipse(this.position.x, this.position.y, this.size);
  }
  
  isDead() {
    return this.lifespan < 0;
  }
}
