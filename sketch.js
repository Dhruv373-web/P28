

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	
}
var body;
var dustbin;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var option = {
		isStatic: false, 
		restitution : 0.3,
		friction : 0.5,
		density : 1.2
	}
	var dustbin_options = {
		isStatic : true
	}
	//Create the Bodies Here.
	 body = Bodies.circle(250,750,20,option);
	 dustbin = Bodies.rectangle(750, 350, 50, 80,dustbin_options);
	 
	 slingshot = new SlingShot(paper.body,{x:200, y:50});

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(300,300,20,20);
  rect(750,350,50,80);
  slingshot.display();
  drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.body.applyForce(paperObject.body, paperobject.body.position, {x:85, y:-85});
	}
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}




