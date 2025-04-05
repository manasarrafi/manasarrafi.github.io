
    let circleColor;

    function setup() {
      createCanvas(400, 400);

      // Check localStorage for color
      let storedColor = localStorage.getItem("circleColor");

      if (storedColor) {
        circleColor = storedColor;
      } else {
        circleColor = "blue";
        localStorage.setItem("circleColor", circleColor);
      }
    }

    function draw() {
      background(220);
      fill(circleColor);
      ellipse(width / 2, height / 2, 100);
    }

    function mousePressed() {
      // Change color randomly on click and save to localStorage
      circleColor = color(random(255), random(255), random(255)).toString();
      localStorage.setItem("circleColor", circleColor);
    }
 
