const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world;
var box1;

function setup()
{
  createCanvas(400,400);
  engine =  Engine.create();
  world = engine.world;
 
  box1 = new box(200,300,50,50);

}
function draw()
{
  background("black");
  Engine.update(engine);
  box1.display();
}