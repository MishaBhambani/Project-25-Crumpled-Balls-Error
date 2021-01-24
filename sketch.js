
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var ground;
var box1;
var box2;
var box3;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, height, 800, 20)
	paperBall = new Paper(115, 600, 70);
	box1 = new Box(625, 600, 120, 180);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //background("#215389");
  background(200);

  Engine.update(engine);

  ground.display();
  box1.display();
  paperBall.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x: 60, y: -60});
	 }
   }