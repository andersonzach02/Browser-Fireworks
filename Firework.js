class Firework
{

    constructor(fireworkParticle, fireworkColor)
    {
        this.firework = fireworkParticle;
        this.sparkColor = fireworkColor;
    }

    draw()
    {
        fill(this.sparkColor);
        ellipse(this.firework.position.x, this.firework.position.y, 8);
        this.firework.update();
    }


}