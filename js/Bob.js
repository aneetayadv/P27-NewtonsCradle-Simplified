class Bob{
    constructor(x,y,r,color){
        var options = {
            restitution : 1,
            density : 1
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.color = color;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}