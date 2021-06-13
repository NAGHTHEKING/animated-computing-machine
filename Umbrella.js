class Umbrella {
    constructor(x,y){
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.animation = loadAnimation("images/Walking Frame/walking.gif");
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        animation(this.animation, pos.x, pos.y+70, 100, 100);
    }
}

