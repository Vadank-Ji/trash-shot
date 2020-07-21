class Launcher{

     constructor(body1, offsetX, offsetY, l)
     {

         this.l = l

         this.offsetX = offsetX;
         this.offsetY = offsetY;
         var options = { bodyA: body1,
         pointB:{ x:this.offsetX, y: this.offsetY },
         stiffness:0.3,
         length: this.l
         
       };

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
     }

    fly(){

      this.rope.bodyA = null;

    }

     display()
     {

      if(this.rope.bodyA)
      {

       stroke("white");
       line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.pointB.x, this.rope.pointB.y,)
      }

     }

}
