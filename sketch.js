
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	image= loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj=new Stone(235,420,30);
	boy=new Boy(400,680,30);

	mango1=new Mango(460,230,30);
	mango2=new Mango(475,250,30);
	mango3=new Mango(440,270,30);
	mango4=new Mango(420,245,30);
	
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
    
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	stoneObj.display();

	drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function  detectCollision(stoneObj,mango1,mango2,mango3,mango4){
	detectCollision(stoneObj,mango1);
	detectCollision(stoneObj,mango2);
	detectCollision(stoneObj,mango3);
	detectCollision(stoneObj,mango4);

	mangoBodyPosition=mango1.body.position
	mangoBodyPosition=mango2.body.position
	mangoBodyPosition=mango3.body.position
	mangoBodyPosition=mango4.body.position
	stoneBodyPosition=stoneObj.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance<=mango1.r+stoneObj.r)
	{
		Matter.Body.setStatic(mango1.body,false);
	}
	
	if (distance<=mango2.r+stoneObj.r)
	{
		Matter.Body.setStatic(mango2.body,false);
	}

	if (distance<=mango3.r+stoneObj.r)
	{
		Matter.Body.setStatic(mango3.body,false);
	}

	if (distance<=mango4.r+stoneObj.r)
	{
		Matter.Body.setStatic(mango4.body,false);
	}

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}
