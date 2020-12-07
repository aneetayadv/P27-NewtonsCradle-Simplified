const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var myEngine, myWorld;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var bobRadius = 20;

function setup() {
  createCanvas(800,500);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  roof = new Roof(400,150,250,20);

  bob1 = new Bob(400-4*bobRadius,350,bobRadius,"#06F9D8");
  bob2 = new Bob(400-2*bobRadius,350,bobRadius,"#F9F906");
  bob3 = new Bob(400,350,bobRadius,"#A1F906");
  bob4 = new Bob(400+2*bobRadius,350,bobRadius,"#F9F906");
  bob5 = new Bob(400+4*bobRadius,350,bobRadius,"#06F9D8");

  rope1 = new Rope(bob1.body,roof.body,-4*bobRadius,0);
  rope2 = new Rope(bob2.body,roof.body,-2*bobRadius,0);
  rope3 = new Rope(bob3.body,roof.body,0,0);
  rope4 = new Rope(bob4.body,roof.body,2*bobRadius,0);
  rope5 = new Rope(bob5.body,roof.body,4*bobRadius,0);
}

function draw() {
  background(0);  
  Engine.update(myEngine);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  fill("white");
  text(mouseX +","+mouseY,mouseX,mouseY);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
	}
}