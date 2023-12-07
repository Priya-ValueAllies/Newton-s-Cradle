class Rope{
    constructor(bodyA,pointA){
var options = {
bodyA:bodyA,
pointB:pointA,
length : 150
}
this.pointB = pointA
this.string = Constraint.create(options)
World.add(world,this.string)
    }



display(){
var pt1 = this.string.bodyA.position
var pt2 = this.pointB
push()
fill('black')
strokeWeight(5)
line(pt1.x,pt1.y-20,pt2.x,pt2.y)


pop()
}
}
