class SparkParticle extends FireworkParticle
{

    constructor(xPosition, yPosition)
    {
        super(xPosition, yPosition, 2);
        this.velocity = createVector(random(-5, 5), random(-8, 8));
        this.acceleration = createVector(0, gravitationalForce);
    }
}