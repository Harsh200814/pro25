class Paperball{
constructor(x,y,radius){
var options={
'restitution':0.3,
'isStatic':false,
'friction':0.5,
'density':1.2
}
this.x=x;
this.y=y;
this.r=radius;
this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
World.add(world,this.body);
this.image=loadImage("paper.png");
}
display(){
var pos=this.body.position;
var angle=this.body.angle;
push ();
translate (pos.x,pos.y);
rotate (angle);
imageMode (CENTER);
image (this.image,0,0,this.r,this.r);
pop();
}
}