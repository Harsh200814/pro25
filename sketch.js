
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world,ball;


function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	
	dustbinObj=new dustbin(1200,650);
	ball=new Paperball(200,600,70);
	
	Engine.run(engine);
  
}


function draw() {
  
  background(230);
  groundObject.display();

  dustbinObj.display();
  ball.display();
}
function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
	Matter.Body.applyForce(ball.body,ball.body.position,{x:280,y:-280});
	}
}

