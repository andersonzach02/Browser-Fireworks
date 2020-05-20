var test;
var gravitationalMagnitude = 6;

function setup() 
{
  createCanvas(windowWidth, windowHeight);

  test = new Particle(width/2, height/2, 2);
}

function draw()
{
  background(0);

  fill(255, 0, 0);

  ellipse(test.position.x, test.position.y, 4);
  test.update();

}