class Firework
{
    constructor(fireworkParticle, fireworkColor)
    {
        this.firework = fireworkParticle;
        this.sparkColor = fireworkColor;
        this.sparks = [];
        this.exploded = false;
    }

    draw()
    {
        if(this.firework.velocity.y <= 0)
        {
            fill(this.sparkColor);
            ellipse(this.firework.position.x, this.firework.position.y, FIREWORK_SIZE);
            this.firework.update();
        }
        else
        {
            this.explode();
        }
    }

    explode()
    {
        const MAX_NUM_OF_SPARKS = 50;

        this.exploded = true;

        if(this.sparks.length != MAX_NUM_OF_SPARKS)
        {
            for (let index = 0; index < MAX_NUM_OF_SPARKS; index++)
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