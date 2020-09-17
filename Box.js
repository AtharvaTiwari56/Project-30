class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':0.000000000000000000002
        }
        this.width = width;
        this.height = height;
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        //this.image = loadImage("jdfglajdg.png");
        World.add(world, this.body);
      }
      display(){
      if(this.body.speed < 3) {
        var pos = this.body.position;
        rectMode(CENTER);
        push();
        translate(pos.x, pos.y)
        rect(0, 0, this.width, this.height);
        pop();
      } else {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255, this.visibility);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
        
      }
}