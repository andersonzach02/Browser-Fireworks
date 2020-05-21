var test;
var gravitationalForce = .7;

function setup() 
{
  createCanvas(windowWidth, windowHeight);

  test = new Firework(new FireworkParticle(width/2, height, 26), color(0, 255, 0));
}

function draw()
{
  background(0);

  fill(255, 0, 0);

  test.draw();
}