class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
    if(this.chain.bodyA) {
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(255, 0, 0);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
    }
    fly(){
        this.chain.bodyA = null;
    }    
    attach(object) {
        this.chain.bodyA = object;
    }
    
}