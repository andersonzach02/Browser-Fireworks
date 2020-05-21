var test;
var gravitationalForce = .7;
const FIREWORK_SIZE = 8;
const SPARK_SIZE = 4;

function setup() 
{
  createCanvas(windowWidth, windowHeight);

  display = new FireworkFactory();

}

function draw()
{
  background(0);

  display.generateDisplay();
  display.display();
}