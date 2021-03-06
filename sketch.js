const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground,ball;
var bg;

function preload(){
  bg=loadImage("sprites/bg.png");
}
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(600,400,1200,20);
  box1=new Box (700,320,70,70);
  box2=new Box (920,320,70,70);
  box3=new Box (700,240,70,70);
  box4=new Box (920,240,70,70);
  box5=new Box (810,160,70,70);

  pig1=new Pig (810,350);
  pig2=new Pig (810,220);
  
  log1=new Log (810,260,300,PI/2);
  log2=new Log (810,180,300,PI/2);
  log3=new Log (760,120,150,PI/7);
  log4=new Log (870,120,150,-PI/7);
  log5=new Log (230,180,80,PI/2);

  bird=new Bird (100,100);

  chain1=new Chain(bird.body,log5.body);

}

function draw() {
  background(bg);  
 
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  bird.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();

  chain1.display();
  
  
}