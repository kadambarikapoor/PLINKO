class Particle{
    constructor(x,y,r){
        var options={
            restitution:0.4,
            //isStatic:false
        }
        
        this.body = Bodies.circle(x,y,r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.r=r;
        World.add(world,this.body);
    }
    display(){
       fill(this.color)
        push();
        //console.log(this.r);
        ellipse(this.body.position.x, this.body.position.y,this.r*2,this.r*2);
        pop();
        noFill();
      }
}