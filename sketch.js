
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(700,height,1400,20);
	dustbin1 = new Dustbin(960,370,170,20)

	dustbin2 = new Dustbin(1120,320,10,70)
	dustbin3 = new Dustbin(960,320,10, 70)
	
	

	trash = new Trash(100,260,70)


	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  trash.display();
  dustbin3.display();

}

function keyPressed(){

	Matter.Body.applyForce(trash.body,trash.body.position,{x:27,y:-27})

}




