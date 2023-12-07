const Engine = Matter.Engine
const World = Matter.World
const Bodies=Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint 
var world,engine,rod1,ball1,rope1

function setup(){
	createCanvas(400,400)
	engine = Engine.create()
	world = engine.world
	
	rod1 = new Rod(50,50,150,20)
	ball1 = new Ball(100,100,20)
	rope1 = new Rope(ball1.body,{x:100,y:60})
	ball2 = new Ball(120,100,20)
	rope2 = new Rope(ball2.body,{x:120,y:60})
	ball3 = new Ball(140,100,20)
	rope3 = new Rope(ball3.body,{x:140,y:60})
	Engine.run(engine)
}


function draw(){
	background(255,0,0)
	text("NEWTON's CRADLE",100,20)
	text("PRESS UP AROW TO SEE THE CRADLE's MOVEMENT",50,50);
rod1.display()
ball1.show()
rope1.display()
ball2.show()
rope2.display()
ball3.show()
rope3.display()
}


function keyPressed(){
	if(keyCode=== UP_ARROW){
		Body.applyForce(ball1.body,ball1.position,{x:10,y:-15})
	}
}
