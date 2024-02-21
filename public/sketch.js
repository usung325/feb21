const flock = [];

function setup() {
    createCanvas(1920, 1080);
    
  }
  

  function mouseClicked(){
    for(i = 0; i<100; i++){
        flock.push(new Boid(mouseX, mouseY));
        console.log(mouseX, mouseY);
    }
  }

  function draw() {
    
    background(51);

    for (let boid of flock) {
        boid.show();
        boid.update();

    }
    // ellipse(50, 50, 80, 80); // Example: draw a circle
  }