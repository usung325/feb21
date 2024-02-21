class Boid {
    constructor(x, y){
        this.x = this.x
        this.y = this.y
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(20,50));
        this.acceleration = createVector();
    
}

    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
    }

    show() {
        strokeWeight(6);
        stroke(random(255),random(255),random(255));
        point(this.position.x, this.position.y);
}

}