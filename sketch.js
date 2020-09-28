
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;	
var dustbin;
var bar1;
var bar2;
var paper;
function preload() {
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
    world = engine.world;
	

	ground = new Ground(600,600,1200,30);

	dustbin = new Dustbin(900,575,400,20);
	bar1 = new Dustbin(700,486,20,200);
	bar2 = new Dustbin(1100,486,20,200);

	paper = new Paper();


	Engine.run(engine);
  
}


function draw() {
	background("green");
  Engine.update(engine)
	ground.display();
	dustbin.display();
	bar1.display();
	bar2.display();
	paper.display();
	force();
	drawSprites();
 
}
function force(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



