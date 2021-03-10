

class Paper 
 
{
    constructor(x,y,radius)
    {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.image = loadImage("Crumpled Paper Image.png");
        World.add(world, this.body);
    }

    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        circle(0,0,this.radius);
        image(this.image,this.x,this.y,this.radius);
        pop();
    }

}