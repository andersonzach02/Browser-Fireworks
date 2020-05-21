class Firework
{

    constructor(fireworkParticle, fireworkColor)
    {
        this.firework = fireworkParticle;
        this.sparkColor = fireworkColor;
        this.sparks = [];

    }

    draw()
    {
        if(this.firework.velocity.y <= 0)
        {
            fill(this.sparkColor);
            ellipse(this.firework.position.x, this.firework.position.y, 8);
            this.firework.update();
        }
        else
        {
            this.explode();
        }
    }

    explode()
    {
        if(this.sparks.length != 100)
        {
            for (let index = 0; index < 100; index++)
            {
                let sparkParticle = new SparkParticle(this.firework.position.x, this.firework.position.y);
                this.sparks[index] = new FireworkSpark(sparkParticle, this.sparkColor);
            }
        }
 

        this.sparks.forEach(spark => {
            spark.draw();
        });
        
    }
}