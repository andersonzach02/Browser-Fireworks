class FireworkSpark
{

    constructor(sparkParticle, sparkColor)
    {
        this.sparkParticle = sparkParticle;
        this.sparkColor = sparkColor;
        this.opacity = 1;
        this.isOut = false;
    }

    draw()
    {
        fill(this.sparkColor);
        ellipse(this.sparkParticle.position.x, this.sparkParticle.position.y, SPARK_SIZE);
        this.sparkParticle.update();

        this.fizzleOut();
    }

    fizzleOut()
    {
        if(alpha(this.sparkColor) > 0)
        {
            this.sparkColor.setAlpha(alpha(this.sparkColor) - .2);
        }
        else
        {
            this.isOut = true;
        }
    }
}