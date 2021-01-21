
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,400,20);
	
	ground = new Ground(800,680,1600,20);
	bin1 = new Dustbin(1000,620,20,100);
	fill("red",);

	bin2 = new Dustbin(1110,660,200,20);
	bin3 = new Dustbin(1220,620,20,100);
	fill("blue");

	Engine.run(engine);
  
}

// for the verticle rectangles, width-20 Height-100.
// for the horizontal rectangle, width is 200, height is 20.
function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


