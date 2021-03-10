
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var garbage1, garbage2, garbage3, ground, paper;
function preload()
{
	loadImage = image("dustbingreen");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	garbage1 = new Garbage(380,525,150,10);
	garbage2 = new Garbage(540,600,10,300);
	garbage3 = new Garbage(700,525,150,10);
	ground = new Ground(400,602.5,800,5);
	paper = new Paper(200,550,40);
	


	Engine.run(engine);
  
}


function draw() {

	//Matter.Body.setVelocity(garbage1,0,0);
	//Matter.Body.setVelocity(garbage2,0,0);
	//Matter.Body.setVelocity(garbage3,0,0);
Engine.update(engine);
  rectMode(CENTER);
  background(0);
  garbage1.display();
  garbage2.display();
  garbage3.display();
  ground.display();
  paper.display();
 
}

function keyPressed()
	{
		if(keyCode === 32) 
		{
			Matter.Body.applyForce(paper.body,paper.body.position,{x:52,y:-880});
		}
	}

