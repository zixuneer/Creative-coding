Ball[] balls = new Ball[1]; // We start with an array with just one element.
float gravity = 0.1;

void setup() {
  size(800, 600);
  
  // Initialize ball index 0
  balls[0] = new Ball(50,0,40);
}

void draw() {
  background(255);
  
  // Update and display all balls
  for (int i = 0; i < balls.length; i ++ ) { // Whatever the length of that array, update and display all of the objects.
    balls[i].gravity();
    balls[i].move();
    balls[i].display();
  }
}

void mousePressed() {
  // A new ball object
  Ball b = new Ball(mouseX,mouseY,40); // Make a new object at the mouse location.
  balls = (Ball[]) append(balls,b);
}
  
  class Ball {
  float x;
  float y;
  float speed;
  float w;
  
  Ball(float tempX, float tempY, float tempW) {
    x = tempX;
    y = tempY;
    w = tempW;
    speed = 0;
  }
  
  void gravity() {
    // Add gravity to speed
    speed = speed + gravity;
  }
  
  void move() {
    // Add speed to y location
    y = y + speed;
    // If square reaches the bottom
    // Reverse speed
    if (y > height) {
      speed = speed * -0.95;
      y = height;
    }
  }
  
  void display() {
    // Display the circle
    fill(random(50,150),random(100,200),random(150,255));
    stroke(0);
    ellipse(x,y,w,w);
  }
}  
