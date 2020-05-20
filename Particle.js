class Particle {
    
    constructor(xLocation, yLocation, velocity) 
    {
        this.position = createVector(xLocation, yLocation);
        this.velocity = createVector(0, -velocity);
    }

    update()
    {
        this.position.add(this.velocity);
    }

    getXPos()
    {
        return this.position.x;
    }
}
