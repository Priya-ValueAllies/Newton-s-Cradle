class Ball{
    constructor(x,y,w){
    var options = {
        restitution:1,
        isStatic:false
    }
    
    this.body = Bodies.circle(x,y,w,options)
    this.width = w
    World.add(world,this.body)
    }
    
    show(){
        var pos= this.body.position
        fill('purple')
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.width,this.width)
    }
    
    
    
    }
