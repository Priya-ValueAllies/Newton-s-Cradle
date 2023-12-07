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
	rod1 = new Rod(50,100,300,20)
	ball1 = new Ball(100,300,20)
	rope1 = new Rope(ball1.body,{x:100,y:100})
	ball2 = new Ball(140,300,20)
	rope2 = new Rope(ball2.body,{x:140,y:100})
	ball3 = new Ball(180,300,20)
	rope3 = new Rope(ball3.body,{x:180,y:100})
	ball4 = new Ball(220,300,20)
	rope4 = new Rope(ball4.body,{x:220,y:100})
	ball5 = new Ball(260,300,20)
	rope5 = new Rope(ball5.body,{x:260,y:100})
	Engine.run(engine)
}


function draw(){
	background("pink")
	textSize(20)
	fill("purple")
	text("NEWTON's CRADLE",100,20)
	textSize(15)
	text("PRESS UP AROW TO SEE THE CRADLE's MOVEMENT",10,50);
rod1.display()
ball1.show()
rope1.display()
ball2.show()
rope2.display()
ball3.show()
rope3.display()
ball4.show()
rope4.display()
ball5.show()
rope5.display()
}


function keyPressed(){
	if(keyCode=== UP_ARROW){
		Body.applyForce(ball1.body,ball1.position,{x:10,y:-15})
	}
}
