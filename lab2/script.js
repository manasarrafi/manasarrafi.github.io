        // Object to control a moving shape
        class MovingShape {
            constructor(x, y, size, speedX, speedY, color) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
                this.color = color;
            }

            // Update position and check boundaries
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off walls
                if (this.x < 0 || this.x > width) {
                    this.speedX *= -1;
                }
                if (this.y < 0 || this.y > height) {
                    this.speedY *= -1;
                }
            }

            // Display the shape
            show() {
                fill(this.color);
                ellipse(this.x, this.y, this.size);
            }

            // Change speed when clicked
            changeSpeed() {
                this.speedX = random(-5, 5);
                this.speedY = random(-5, 5);
            }
        }

        let shape;

        function setup() {
            createCanvas(500, 400);
            shape = new MovingShape(width / 2, height / 2, 50, 3, 2, 'blue');
        }

        function draw() {
            background(240);
            shape.update();
            shape.show();
        }

        function mousePressed() {
            shape.changeSpeed();
        }