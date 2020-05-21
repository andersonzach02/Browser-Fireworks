class FireworkSpark
{

    constructor(sparkParticle, sparkColor)
    {
        this.sparkParticle = sparkParticle;
        this.sparkColor = sparkColor;
    }

    draw()
    {
        fill(this.sparkColor);
        ellipse(this.sparkParticle.position.x, this.sparkParticle.position.y, 4);
        this.sparkParticle.update();
    }
}