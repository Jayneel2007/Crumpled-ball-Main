class Trash{
    constructor(x,y,radius){

        var options ={

            'restitution':0.3,
            'friction':0.5,
            'density':0.5

        }
        
       this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,radius/4,options);
       this.radius = radius
        World.add(world,this.body)

    }


    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image, 0,0,this.radius,this.radius);
        
        pop();
    }

}
