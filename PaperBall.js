
class PaperBall
{

  constructor(x, y, w, h)
  {


    this.Body = Bodies.circle(x,y,r);
    World.add(world, this.Body)
    this.radius = r

  }

display()
{
   
   rectMode(CENTER);
   rect(this.position.x,this.position.y, w, h);

}

  }
