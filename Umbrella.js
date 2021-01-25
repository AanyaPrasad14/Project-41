class umbrella{
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0.5
        }

        this.image = loadImage("images/Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella);
    }

    display(){
        //this.image = loadAnimation("Walking Frame/walking_1.png, Walking Frame/walking_1.png, Walking Frame/walking_1.png, Walking Frame/walking_1.png, Walking Frame/walking_1.png, Walking Frame/walking_1.png, Walking Frame/walking_1.png, Walking Frame/walking_1.png");
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+ 70, 300, 300);
    }
}