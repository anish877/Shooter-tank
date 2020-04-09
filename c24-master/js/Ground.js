class Ground{
  constructor(x,y,width,height){
      var option_ground={
          isStatic:true
          
      }
      this.body = Bodies.rectangle(x,y,width,height,option_ground)
      this.width = width;
     this.height = height;
     World.add(world,this.body);
  }
 
 display(){
 var pos = this.body.position;
 rectMode(CENTER);
 fill("yellow"); 
 rect(pos.x,pos.y,this.width,this.height)
 }
 }