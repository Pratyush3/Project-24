class Paper{
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:  0.5,
            density: 1.2
            
        }  
        this.body=Bodies.circle(200,450,40,options);
        World.add(world,this.body);
        console.log(this.body);
 }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,40);
        pop();
    }
}
