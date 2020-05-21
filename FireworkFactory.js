class FireworkFactory
{

    constructor()
    {
        this.fireworksDisplay = [];
    }

    generateDisplay()
    {
        if(random(1) < .025 && this.fireworksDisplay.length < 5)
        {
            this.addFireworkToDisplay(this.fireworksDisplay.length);
        }
    }

    display()
    {
        for(let index = 0; index < this.fireworksDisplay.length; index++)
        {
            let currentFirework = this.fireworksDisplay[index];
            
            currentFirework.draw();

            if(currentFirework.exploded)
            {
                if(alpha(currentFirework.sparks[0].sparkColor) <= 0)
                {
                    this.fireworksDisplay.splice(index, 1);
                }
            }
        }
    }

    addFireworkToDisplay(index)
    {
        var newFireworkParticle = new FireworkParticle(random(width), height + 6, random(18, 27));

        let fireworkColor = color(
            random(255),
            random(255),
            random(255)
        )

        this.fireworksDisplay[index] = new Firework(newFireworkParticle, fireworkColor);
    }

}