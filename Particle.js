class Particle {
    
    constructor(xLocation, yLocation, velocity) 
    {
        this.position = createVector(xLocation, yLocation);
        this.velocity = createVector(0, -velocity);
        this.acceleration = createVector(0, gravitationalMagnitude);
    }

    update()
    {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
    }

    getXPos()
    {
        return this.position.x;
    }
}
