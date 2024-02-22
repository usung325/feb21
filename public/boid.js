export default class Boid {
    constructor(x, y, p5){
        this.x = x
        this.y = y
        this.position = p5.createVector(x, y);
        this.velocity = p5.createVector(p5.random(-100, 100),p5.random(-100, 100),p5.random(100));
        this.velocity.setMag(p5.random(10,30));
        this.acceleration = p5.createVector();
    
}
    update(p5){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
    }

    show(p5) {
        p5.strokeWeight(6);
        p5.stroke(p5.random(255),p5.random(255),p5.random(255));
        p5.point(this.position.x, this.position.y);
}

}

// export { Boid.update, show };