var ground, box1, box2, box3, ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,580,width,20);
	box1 = new Dustbin(960,400,20,310);
	box2 = new Dustbin(1195,400,20,310);
	box3 = new Dustbin(1080,560,230,20);
	ball = new Ball(100,500,15);



	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
 drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position,{x:50, y:-55})
}
}



