class Tank {
  constructor(x, y, width, height,angle) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    Matter.Body.setAngle(this.body,angle)
    World.add(world, this.body);
  }
  display(){
    
    var angle = this.body.angle;
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    var r = random(0,255);
    var b = random(0,255);
    var g = random(0,255);
    fill("green");
    rect(0,0, this.width, this.height);
    pop();
  }
}