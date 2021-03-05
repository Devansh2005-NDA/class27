class Slingshot{
    constructor(bodyA,bodyB){
        var Option= {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            lenght:13.5
        }
  this.Slingshot=Constraint.create(Option)
  this.bodyA=bodyA;
  this.bodyB=bodyB;
    World.add(world,this.Slingshot);

    }
display(){
    var pointA=this.Slingshot.bodyA.position;
    var pointB=this.Slingshot.bodyB.position;
    strokeWeight(4);
    line (pointA.x,pointA.y,pointB.x,pointB.y);
}
}