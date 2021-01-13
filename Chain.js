class Chain {

    constructor(body1, point2){
             
       var options= {
           bodyA: body1,
           pointB: point2,
           stiffness: 1.1,
           length: 240
   
        }
        this.chain1 = Constraint.create(options);
        World.add(world, this.chain1);
        }
        
    display(){
           if(this.chain1.bodyA){
        var point2 = this.chain1.pointB;
        var body1 = this.chain1.bodyA.position;

        push();
        stroke("brown");
        strokeWeight(3);

        line(point2.x, point2.y,body1.x, body1.y);
        pop();
    
    }
}
    }